require 'sinatra'
require 'sinatra/reloader'
require 'slim'

# get('/') do

# end



# get('/layout') do

#     slim(:layout)
# end



get('/white_noise') do

    @noise_info = {
        noise_name: "White Noise",
        noise_background_img: "white_noise_img.jpg"
            # noise_file: ""
            # /img/sinatra_img.jpg
        }
    slim(:noises)

end


get('/red_noise') do

    @noise_info = {
        noise_name: "Red Noise",
        noise_background_img: "brown_noise_img.jpg"        
        }
    slim(:noises)

end

get('/pink_noise') do

    @noise_info = {
        noise_name: "Pink Noise",
        noise_background_img: "pink_noise_img.jpg"
        }
    slim(:noises)

end

get('/brown_noise') do

    @noise_info = {
        noise_name: "Brown Noise",
        noise_background_img: "brown_noise_img.jpg"
        }
    slim(:noises)

end


# section id="noise_section"
#     - @noise_info.each do |info|
#         section style="background: bisque" class="color_sections"
#             section style="width: 100px; height: 100px;" class="noise_sections" = info[:noise_1]
#             section style="width: 100px; height: 100px;" class="noise_sections" = info[:noise_2]
