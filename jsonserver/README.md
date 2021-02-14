http://localhost:3000/users/

http://localhost:3000/users/1

http://localhost:3000/companies

http://localhost:3000/companies/1/users

http://localhost:3000/companies?name=Apple

http://localhost:3000/companies?name=Apple&name=Microsoft

http://localhost:3000/companies?_page=1&_limit=2

http://localhost:3000/companies?_sort=name&_order=asc


//年龄30以上
http://localhost:3000/users?age_gte=30

//年龄30到40之间
http://localhost:3000/users?age_gte=30&age_lte=40

//搜索用户信息
http://localhost:3000/users?q=henry