require 'sinatra'
require 'sinatra/reloader'
require 'slim'

# get('/') do

# end
get('/home_screen') do
    
    slim(:home_screen)

end

## Hej