const user = {
   id: 11,
   displayName: "Syaifa",
   fullName: "Syaifa Zuhrain",
};

function intro({displayName, fullName}){
   console.log(`${displayName} is ${fullName}`);
}

intro(user);