class Routers {
  constructor() {
    this.routes = {};
    this._bindPopState();
  }
  init(path) {
    history.replaceState({path: path}, null, path);
    this.routes[path] && this.routes[path]();
  }

  route(path, callback) {
    this.routes[path] = callback || function() {};
  }

  go(path) {
    history.pushState({path: path}, null, path);
    this.routes[path] && this.routes[path]();
  }
  _bindPopState() {
    window.addEventListener('popstate', e => {
      const path = e.state && e.state.path;
      this.routes[path] && this.routes[pathclass Routers {
        constructor() {
          this.routes = {}
          this.currentUrl = ''
          this.history = []
          this.currentIndex = this.history.length - 1
          this.refresh = this.refresh.bind(this);
          this.backOff = this.backOff.bind(this);
          this.isBack  = false
          window.addEventListener('load', this.refresh, false)
          window.addEventListener('hashchange', this.refresh, false)
        }
        // 将路由的hash以及对应的callback函数储存
        route(path, callback) {
          this.routes[path] = callback || function () {  }
        }
        // 触发路由hash变化后,执行对应的callback函数
        refresh() {
          this.currentUrl = location.hash.slice(1) || '/'
          if (!this.isBack) {
            if (this.currentIndex <= this.history.length - 1) {
              this.history = this.history.slice(0, this.currentIndex + 1)
            }
            this.history.push(this.currentUrl)
            this.currentIndex++
          }
          this.routes[this.currentUrl]()
          this.isBack = false
        }
        backOff() {
          this.isBack = true
          this.currentIndex <= 0 ? this.currentIndex = 0 : --this.currentIndex
          location.hash = `#${this.history[this.currentIndex]}`
          this.routes[this.history[this.currentIndex]]()
        }
      }
  }
}

window.Router = new Routers();
Router.init(location.pathname);
const content = document.querySelector('body');
const ul = document.querySelector('ul');
function changeBgColor(color) {
  content.style.backgroundColor = color;
}

Router.route('/', function() {
  changeBgColor('yellow');
});
Router.route('/blue', function() {
  changeBgColor('blue');
});
Router.route('/green', function() {
  changeBgColor('green');
});

ul.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    Router.go(e.target.getAttribute('href'));
  }
});
