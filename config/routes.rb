Rails.application.routes.draw do
  
  #resources :complaints
  # resources :school_classes
  # resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  patch "/users/:id", to: "users#update"

  get "/:id/students", to: "users#student_list"
  get '/students_without_teachers', to: "users#students_without_teachers"
  get "/:id/classes", to: "school_classes#class_list"
  post "/complaints/create", to: "complaints#create"
  get "/:id/:subject", to: "school_classes#teacher_classes"

  patch "/teacher/:id/:username", to: "users#update_teacher_id"
end
