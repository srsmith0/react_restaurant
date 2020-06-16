# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Menu.create(name:"Breakfast")
Menu.create(name:"Dinner")

# Item.create(name: "Oatmeal" , price: 1.99,  menu_id: 1)
# Item.create(name: "Breakfast Burrito",  price: 4.99,  menu_id: 1)
# Item.create(name: "Pancakges", price: 2.99, menu_id: 1)
# Item.create(name: "Tacos", price: 5.99, menu_id: 2)
# Item.create(name: "Bahn Mi", price: 4.99, menu_id: 2)

puts "seeded!"