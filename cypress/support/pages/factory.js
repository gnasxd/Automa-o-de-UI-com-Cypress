import { faker } from '@faker-js/faker/locale/pt_BR'; // Usando a localização para dados em português!

export const generateUser = () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const password = faker.internet.password({ length: 10 });

    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number('###########'),
        email: faker.internet.email({
            firstName: firstName,
            lastName: lastName
        }),
        password: password,
        passwordConfirmation: password
    };
};