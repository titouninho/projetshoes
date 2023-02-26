import React from 'react';
import './panier.css';

const PanierPage = (props) => {
    return (
    <div class="cart-container">
      <table>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Total</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">Total</td>
            <td id="total-price">$0.00</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      
      <div class="checkout">
        <button>Commander</button>
      </div>
    </div> );
}
 
export default PanierPage;