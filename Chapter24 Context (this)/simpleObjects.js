var person = {
    name: 'John Doe',
    age: 42,
    gender: 'male',
    bio: function() {
    console.log('My name is ' + this.name);}}

    const bio =person.bio
    console.log(bio())

    console.log(person.bio())