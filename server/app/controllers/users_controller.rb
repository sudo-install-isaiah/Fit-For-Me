class UsersController < ApplicationController
  def index
    # @users = User.all
    # render json: @users

    response = Excon.get(
      "https://exercisedb.p.rapidapi.com/exercises",
      headers: {
        'X-RapidAPI-Host' => URI.parse("https://exercisedb.p.rapidapi.com/exercises").host,
        'X-RapidAPI-Key' => 'e9a5605540msheab7371380e256ap16ac96jsn44941a55d88f'
      }
    )
    return nil if response.status != 200
    JSON.parse(response.body)
    end
end