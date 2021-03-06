import React from 'react';
import List from '../../Components/List/List';



function Medicine(props) {
    const Medicinedata=[
        {
          id: 101,
          name: 'Abacavir',
          quantity: 25,
          price: 150,
          expiry: 2022,
          status: true
        },
        {
          id: 102,
          name: 'Eltrombopag',
          quantity: 90,
          price: 550,
          expiry: 2021,
          status: true
        },
        {
          id: 103,
          name: 'Meloxicam',
          quantity: 85,
          price: 450,
          expiry: 2025,
          status: false
        },
        {
          id: 104,
          name: 'Allopurinol',
          quantity: 50,
          price: 600,
          expiry: 2023,
          status: true
        },
        {
          id: 105,
          name: 'Phenytoin',
          quantity: 63,
          price: 250,
          expiry: 2021,
          status: false
        },
        {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021,
            status: false
          }
      ];
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Medicine</h2>
                </div>
                <form action method="post" role="form" className="php-email-form">
                    <div className="row">
                        <List data={Medicinedata} />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Medicine;