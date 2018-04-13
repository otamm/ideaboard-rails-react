module Api::V1 # this makes the API have a version, useful for backwards compatibility in future versions
	class IdeasController < ApplicationController
		def index
			@ideas = Idea.order("created_at DESC")
			render json: @ideas
		end

		private

		def idea_params
			params.require(:idea).permit(:title, :body)
		end
	end
end