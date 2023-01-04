db.createCollection("Student")
db.Student.insertMany([
    {_id:1,name:"Ram",marks:[82,35,99]},
    {_id:2,name:"Ravi",marks:[56,78,90]},
    {_id:3,name:"Ziyan",marks:[67,97,86]},
    {_id:4,name:"Vihana",marks:[56,86,87]},
    {_id:5,name:"Heer",marks:[78,56,45]}
])