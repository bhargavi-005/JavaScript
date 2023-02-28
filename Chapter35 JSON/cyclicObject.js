const world = {
    name: 'World',
    regions: []
   };
   world.regions.push({
    name: 'North America',
    parent: 'America'
   });
   console.log(JSON.stringify(world));
   // {"name":"World","regions":[{"name":"North America","parent":"America"}]}
   world.regions.push({
    name: 'Asia',
    parent: world
   });
   console.log(JSON.stringify(world));


   //this will   execute
   