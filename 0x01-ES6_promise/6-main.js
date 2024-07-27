import handleProfileSignup from './6-final-user';


async () => {
    const queue = await handleProfileSignup('John', 'Doe', 'Gerald.jpg');
    console.log(queue);

}
console.log(handleProfileSignup('John', 'Doe', 'Gerald.jpg'));

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
