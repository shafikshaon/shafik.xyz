---
title: "Todo app using Django, VueJS, and Django REST Framework"
description: ""
date: 2019-10-08T00:56:09+06:00
author: "Shafikur Rahman Shaon"
tags: [
"Vue", "Django", "Django-REST-Framework",
]
draft: true
---

Create a **Todo App** using **Django**, **Django REST Framework**, and **VueJS**.
In Todo App, we have the following functionalities:

1. User can add a todo task
2. Edit todo task
3. Todo task mark as completed

To develop this Todo app follow the following procedure:

    django-admin startproject todoapp

The creation app `todo`

    python manage.py startapp todo

Install `django-webpack-loader` and    `django-rest-framework`

    pip install django-webpack-loader
    pip install django_rest_framework

Add `webpack_loader`  and `rest_framework` to `INSTALLED_APPS` on `settings.py`

Then

    python manage.py runserver

Then go to http://127.0.0.1:8000/

Now add vue app

    vue init webpack-simple vuefrontend

Project name: `vuefrontend`

    cd vuefronend
    npm install
    npm run dev

Then

    npm install --save-dev webpack-bundle-tracker
    npm install write-file-webpack-plugin --save-dev

Now open `webpack.config.js` from `vuefrontend` directory

    var BundleTracker = require('webpack-bundle-tracker')
    var WriteFilePlugin = require('write-file-webpack-plugin')

Change `publicPath` to

    publicPath: 'http://localhost:8080/dist/',

Add

    plugins: [
        new BundleTracker({
          filename: 'webpack-stats.json'
        }),
        new WriteFilePlugin()
      ],
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
      },

Then in `settings.py` add following code

    REST_FRAMEWORK = {
        'DEFAULT_PERMISSION_CLASSES': [
            'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly',
        ]
    }
    
    WEBPACK_LOADER = {
        'DEFAULT': {
            'CACHE': not DEBUG,
            'BUNDLE_DIR_NAME': '',
            'STATS_FILE': os.path.join(BASE_DIR, 'vuefrontend/webpack-stats.json'),
            'POLL_INTERNAL': 0.1,
            'TIMEOUT': None,
            'IGNORE': ['.+\.hot-update.js', '.+\.map']
        }
    }

In `todo` add `Todo` model

```
class Todo(models.Model):  
  title = models.CharField(max_length=255, null=False, blank=False)  
  added_at = models.DateTimeField(auto_now_add=True)  
  status = models.BooleanField(default=False)  
  
  def __str__(self):  
    return self.title
```

Add `serializer.py`

    class TodoSerializer(serializers.ModelSerializer):  
     class Meta:  
      model = Todo  
            fields = '__all__'

Then run following command

    python manage.py makemigrations
    python manage.py migrate

In `todo` app `views.py`

    from rest_framework.permissions import IsAuthenticated  
    from rest_framework.viewsets import ModelViewSet  
      
    from todo.models import Todo  
    from todo.serializers import TodoSerializer  
      
      
    class TodoViewSet(ModelViewSet):  
      permission_classes = (  
      IsAuthenticated,  
     )  queryset = Todo.objects.all()  
      serializer_class = TodoSerializer  
        lookup_field = 'id'

Add following in `admin.py`

    admin.site.register(Todo)

Add `urls.py` in `todo` app

    from django.urls import path, include  
    from rest_framework.routers import DefaultRouter  
      
    from todo.views import TodoViewSet  
      
    router = DefaultRouter()  
    router.register(r'todo', TodoViewSet)  
      
    urlpatterns = [  
      path('', include(router.urls))  
    ]

add `index.html` template

    <!DOCTYPE html>
    <html lang="en">
    <head>
        {% load render_bundle from webpack_loader %}
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
    <div id="app">
    
    </div>
    
    {% render_bundle 'main' %}
    </body>
    </html>

In root `urls.py`

    path('api/', include('todo.urls')),  
    path('', TemplateView.as_view(template_name='index.html')),

In `vuefrontend` go to `main.js`

    import Vue from 'vue'  
    import App from './App.vue'  
    import axios from "axios";  
      
    new Vue({  
      el: '#app',  
      beforeCreate(){  
      Vue.prototype.$http = axios  
     axios.defaults.xsrfHeaderName = 'X-CSRFToken'  
      axios.defaults.xsrfCookieName = 'csrftoken'  
      },  
      render: h => h(App)  
    })

Change `App.vue`

    <template>  
      <div id="app">  
        <form @submit.prevent="submitTodo">  
          <label for="title">Title</label>  
          <input type="text" v-model="formData.title" id="title">  
          <br/>  
          <button type="submit">Submit</button>  
          {{msg}}  
      </form>  
      
        <h1>All Todo</h1>  
        <ul>  
          <li v-for="(todo, index) in todos" :key="index">  
            <div>  
              <h3>{{ todo.title }}</h3>  
              <p>{{ todo.added_at }}</p>  
              <p>{{ todo.status }}</p>  
            </div>  
          </li>  
        </ul>  
      </div>  
    </template>  
      
    <script>  
        import api from './api/index'  
      
      export default {  
      name: 'app',  
      data() {  
      return {  
      formData: {  
      title: '',  
      status: '',  
      added_at: ''  
      },  
      msg: '',  
      todos: []  
     } },  methods: {  
      submitTodo() {  
      this.formData.status = false  
      api.fetchTodos('post', null, this.formData).then(res => {  
      this.msg = 'Saved'  
      }).catch((e) => {  
      this.msg = e.response  
      console.log(this.msg)  
     } ) },  fetchAllTodos() {  
      api.fetchTodos('get', null, null).then(res => {  
      this.todos = res.data  
      }).catch((e) => {  
      console.log(e)  
     }) } },  mounted() {  
      this.fetchAllTodos()  
     } }</script>  
      
    <style>  
      #app {  
      font-family: 'Avenir', Helvetica, Arial, sans-serif;  
      -webkit-font-smoothing: antialiased;  
      -moz-osx-font-smoothing: grayscale;  
      text-align: center;  
      color: #2c3e50;  
      margin-top: 60px;  
     }  
     h1, h2 {  font-weight: normal;  
     }  
     ul {  list-style-type: none;  
      padding: 0;  
     }  
     li {  display: inline-block;  
      margin: 0 10px;  
     }  
     a {  color: #42b983;  
     }</style>

Add `vuefrontend/src/api/index.js`

```
import axios from 'axios'  
  
export default {  
  fetchTodos(method, params, data) {  
  if (method === 'post') {  
  return ajax('api/todo/', method, {data})  
 } else {  
  return ajax('api/todo/', method, {})  
 } }}  
  
  
function ajax(url, method, options) {  
  if (options !== undefined) {  
  var {params = {}, data = {}} = options  
  } else {  
  params = data = {}  
 }  
  return new Promise((resolve, reject) => {  
  axios({  
  url, method, params, data  
  }).then(res => {  
  resolve(res)  
 }, res => {  
  reject(res)  
 }) })}
```

Change `vuefrontend/index.html`
```
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>frontend</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="/dist/build.js"></script>
      </body>
    </html>
```


