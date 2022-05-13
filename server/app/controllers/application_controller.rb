require 'faraday'
require 'faraday/net_http'
Faraday.default_adapter = :net_http

class ApplicationController < ActionController::API
  conn = Faraday.new(
    url: 'https://exercisedb.p.rapidapi.com',
    headers: { 'Content-Type' => 'application/json', 'X-RapidAPI-Host' => 'exercisedb.p.rapidapi.com',
               'X-RapidAPI-Key' => ENV['API_KEY'] }
  ) do |f|
    f.response :json
  end

  response = conn.get('/exercises/bodyPart/chest')

  result = response.body
  puts result.select { |element| element['equipment'] == 'barbell' }
end
