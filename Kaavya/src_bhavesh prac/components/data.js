export let credcheck=[
    {email:"example1@snuchennai.edu.in",password:"Example1"},
    {email:"example12@snuchennai.edu.in",password:"Example12"},
    {email:"example123@snuchennai.edu.in",password:"Example123"},
    {email:"example1234@snuchennai.edu.in",password:"Example1234"},
];

export function Push(list){
    credcheck.push(list);
}