require 'sinatra'
require 'sinatra/reloader'
require 'slim'

get('/') do
    slim(:power)
end

get('/white_noise') do

    @noise_info = {
        noise_name: "Vitt Brus",
        # noise_background_img: "white_noise_img.jpg",
        # noise_description: "Lorem20",
        noise_file: "01-White-Noise-10min.mp3"
        }
    slim(:noises)

end


get('/red_noise') do

    @noise_info = {
        noise_name: "Rött Brus",
        # noise_background_img: "brown_noise_img.jpg",
        # noise_description: "Lorem20",
        noise_file: "02-White-Noise-10min.mp3"

        }
    slim(:noises)

end

get('/pink_noise') do

    @noise_info = {
        noise_name: "Rosa Brus",
        # noise_background_img: "pink_noise_img.jpg",
        # noise_description: "Lorem20",
        noise_file: "PinkNoise_01.mp3"

        }
    slim(:noises)

end

get('/brown_noise') do

    @noise_info = {
        noise_name: "Brunt Brus",
        # noise_background_img: "brown_noise_img.jpg",
        # noise_description: "Lorem20",
        noise_file: "BrownianNoise_01.mp3"
        }
    slim(:noises)

end