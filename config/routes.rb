Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get 'games/index'
  root 'games#index'

  # Define the rest of the root
  get 'memory_game/index', as: :memory_game
  get 'whac_a_mole/index', as: :whac_a_mole
  get 'rock_paper_scissors/index', as: :rock_paper_scissors
  get 'candy_crush/index', as: :candy_crush
  get 'chess/index', as: :chess
  get 'frogger/index', as: :frogger
  get 'space_invaders/index', as: :space_invaders
  get 'connect_four/index', as: :connect_four
  get 'breakout_game/index', as: :breakout_game
end
