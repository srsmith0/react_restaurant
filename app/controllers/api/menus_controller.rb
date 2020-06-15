class Api::MenusController < ApplicationController
  def index
    render json: Menu.all
  end

  def create
    menu = Menu.new(set_menu)
    if menu.save
      render json: menu
    else
      render json: {errors: item.errors}, status: :unprocessable_entity
    end
  end

  def update
    menu = Menu.find(params[:id])
    menu.update(complete: !menu.update)
    render json: menu
  end


  def destroy
    Menu.find(params[:id]).destroy

  end

private

def set_menu
  params.require(:menu).permit(:name)
end


end
