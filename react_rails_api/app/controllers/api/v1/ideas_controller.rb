module Api::V1 # this makes the API have a version, useful for backwards compatibility in future versions
	class IdeasController < ApplicationController
		def index
			@ideas = Idea.all
			render json: @ideas
		end
	end
end
