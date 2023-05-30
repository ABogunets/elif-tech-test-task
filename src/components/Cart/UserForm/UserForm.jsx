import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { nanoid } from "nanoid";
import {
  Container,
  Title,
  FormWrapper,
  Label,
  Input,
} from "components/Cart/UserForm/UserForm.styled";

import { addOrder } from "services/service-api.js";

import { useContext } from "react";
import { Context } from "App";

export const UserForm = ({ totalPrice }) => {
  const context = useContext(Context);

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const phoneInputId = nanoid();
  const addressInputId = nanoid();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      phone: form.elements.phone.value,
      address: form.elements.address.value,
    };
    const order = { ...formData, ...context.cartData, totalPrice };

    const placeOrder = async () => {
      try {
        const orderData = await addOrder(order);
        console.table("YOUR ORDER:", orderData);
        if (orderData.length !== 0) {
          toast.success(`Your order has been placed!`);
        }
      } catch (err) {
        console.log(err.message);
        toast.error(
          `Sorry, something went wrong with the server, please try again.`
        );
      }
    };
    placeOrder();
    form.reset();
    context.setCartData([]);
  };

  return (
    <Container>
      <Title>Client data:</Title>
      <FormWrapper onSubmit={handleSubmit} id="userForm">
        <Label htmlFor={nameInputId}>Name:</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
        <Label htmlFor={emailInputId}>Email:</Label>
        <Input type="email" name="email" required id={emailInputId} />

        <Label htmlFor={phoneInputId}>Phone:</Label>
        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={phoneInputId}
        />
        <Label htmlFor={addressInputId}>Address:</Label>
        <Input type="text" name="address" required id={addressInputId} />
      </FormWrapper>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};
