import React from 'react'
import "./Prices-Antd.css"
import { List, Card, Button } from 'antd';

export const AppPrices = () => {

  const { Item } = List

  const data = [
    {
      title: 'Ensayo',
      content: [
        {
          coin: '(pesos Arg.)',
          price: '$ 8.000',
          hours: '4 hs. de grabación',
          tecnico: 'x',
          mezcla: 'x',
          mastering: 'x',
        }
      ]
    },
    {
      title: 'Grabación',
      content: [
        {
          coin: '(pesos Arg.)',
          price: '$ 20.000',
          hours: '8 hs. de grabación',
          tecnico: 'con Técnico',
          mezcla: 'Mezcla',
          mastering: 'x',
        }
      ]
    },
    {
      title: 'Producción',
      content: [
        {
          coin: '(pesos Arg.)',
          price: '$ 35.000',
          hours: '8 hs. de grabación',
          tecnico: 'Técnico y Asistente',
          mezcla: 'Mezcla',
          mastering: 'Masterización',
        }
      ]
    }
  ];

  return (
    <div id="prices" className='block pricesBlock bgGray'>
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>¿Querés grabar con nosotros?</h2>
          <p>Te ofrecemos los siguientes packs.<br />Podés consultanos sobre presupuestos personalizados.</p>
        </div>

        <List
          grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
          dataSource={data}
          renderItem={item => (
            <Item>
              <Card title={item.title}>
                <p className='price'> {item.content[0].price} </p>
                <p className='coin'> {item.content[0].coin} </p>
                <p> {item.content[0].hours} </p>
                <p> {item.content[0].tecnico} </p>
                <p> {item.content[0].mezcla} </p>
                <p> {item.content[0].mastering} </p>
                <Button type='primary' size='large'> Reservar </Button>
              </Card>
            </Item>
          )}
        />
        
      </div>
    </div>
  )
}