  root => 'dashboard#show'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  
  get /workouts => workouts#index
  post /workouts => workouts#create
  get /workouts/new => workouts#new
  get /workouts/:id => workout#show
  get /workouts/:id/:day_id => ???
  
  get /templates => ???
  get /exercise/:id => exercise#show
  