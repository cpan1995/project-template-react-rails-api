# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# user1 = User.create(username: "cpan1995", password_digest: "123123" first_name: "bob", last_name: "nice", is_teacher: true)

# User.create(username: 'test', password_digest: '123123', first_name: 'sam', last_name: 'stone', is_teacher: true)
# User.create(username: 'test', password_digest: '123123', first_name: '', last_name: '', is_teacher: true, teacher_id:)
# User.create(username: 'test', password_digest: '123123', first_name: '', last_name: '', is_teacher: true, teacher_id:)

# User.delete_all
# Complaint.delete_all
SchoolClass.delete_all

SchoolClass.create(grade: 90, user_id: User.first.id, homeworks: ["qweqwe","qweqwe","qwe"], subject: "Math")
SchoolClass.create(grade: 90, user_id: User.first.id, homeworks: ["qasdasd","asdasd","asdasd"], subject: "Science")
SchoolClass.create(grade: 90, user_id: User.first.id, homeworks: ["zxczxc","zxczxc","zxczxc"], subject: "History")

SchoolClass.create(grade: 90, user_id: User.second.id, homeworks: ["qweqwe","qweqwe","qwe"], subject: "Math")
SchoolClass.create(grade: 90, user_id: User.second.id, homeworks: ["qasdasd","asdasd","asdasd"], subject: "Science")
SchoolClass.create(grade: 90, user_id: User.second.id, homeworks: ["zxczxc","zxczxc","zxczxc"], subject: "History")

