//  import React form 'react';
import {useForm} from '@mantine/form';
import {TextInput, PasswordInput, Button} from '@mantine/core';

const Myform = () => {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
            password: '',
        },
        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 5 letters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            phone: (value) => (/^\+?\d{1,3}[- ]?\(?\d\)?[- ]?\d{1,8}$/.test(value) ? null : 'Invalid phone number'),
            address:  (value) => (value.trim(). length <5 ? 'Address at least 5 characters' : null),
            password: (value, values) => value !== values.password ? 'Passwords did not match' : null,
        },
    });
    return (
        <form onSubmit={form.onSubmit((value) => console.log(value))}>
            <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')}/>
            <TextInput label="Email" placeholder="Email" {...form.getInputProps('email')}/>
            <TextInput label="Phone" placeholder="Phone" {...form.getInputProps('phone')}/>
            <TextInput label="Address" placeholder="Adress" {...form.getInputProps('address')}/>
            <PasswordInput label="Password" placeholder="Password" {...form.getInputProps('password')}/>
            <Button type="submit">submit</Button>
        </form>
    )
}
export default Myform;