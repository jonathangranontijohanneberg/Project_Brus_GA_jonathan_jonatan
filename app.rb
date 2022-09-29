require 'sinatra'
require 'sinatra/reloader'
require 'slim'

# get('/') do

# end
class NoiseClass
    def initialize(noise_1, noise_2)
        @noise_1 = noise_1
        @noise_2 = noise_2
    end

    def noises
        x = NoiseClass.new
        
        {noise_1: @noise_1, noise_2: @noise_2}
    end

end


get('/home_screen') do
    noises =
    @noise_info = [ ,
        {
        # sound1: "Snobben",
        # sound2: "329"
        }
    ]
    slim(:home_screen)

end

# section id="sound_section"
#     - @sound_info.each do |info|
#         section style="background: bisque" class="color_sections"
#             section style="width: 100px; height: 100px;" class="sound_sections" = info[:noise_1]
#             section style="width: 100px; height: 100px;" class="sound_sections" = info[:noise_2]
