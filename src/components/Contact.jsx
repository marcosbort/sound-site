import React from "react";
import "./Contact.css";
import { Form, Input, Button, Checkbox } from "antd";
import { TermsAndConditions } from "./TermsAndConditions";

const { TextArea } = Input;
const { Item } = Form;

export const Contact = () => {
  return (
    <div id="contact" className="block contact-block">
      <div className="container-fluid">
        <div className="title-holder">
          <h2>Enviános tu mensaje</h2>
          <p>Y nos contactamos con vos</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Item
            name="fullname"
            rules={[
              {
                required: true,
                message: "Ingresá tu nombre!",
              },
            ]}
          >
            <Input placeholder="Nombre y Apellido" />
          </Item>
          <Item
            name="email"
            rules={[
              {
                type: "email",
                message: "El E-mail no es válido!",
              },
              {
                required: true,
                message: "Ingresá tu Email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Item>
          <Item name="telephone">
            <Input placeholder="Teléfono" />
          </Item>
          <Item
            name="message"
            rules={[
              {
                required: true,
                message: "No olvides tu mensaje! 🙏",
              },
            ]}
          >
            <TextArea placeholder="Mensaje" />
          </Item>
          <Item>
            <Item
              name="remember"
              valuePropName="checked"
              noStyle
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          "Debes aceptar los Términos y Condiciones"
                        ),
                },
              ]}
            >
              <Checkbox>
                Acepto los
                <TermsAndConditions />
              </Checkbox>
            </Item>
          </Item>
          <Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Submit
            </Button>
          </Item>
        </Form>
      </div>
    </div>
  );
};
