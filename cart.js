/* Neues Styling für die Warenkorbzeile */
#cart-link {
    position: relative;
}

#cart-count {
    background-color: #ff9900;
    color: #fff;
    padding: 2px 5px;
    border-radius: 50%;
    font-size: 0.8em;
    vertical-align: middle;
    margin-left: 5px;
}

.cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.cart-item:last-child {
    border-bottom: none;
}

.cart-item .product-info {
    flex-grow: 1;
}

.cart-item .remove-item {
    cursor: pointer;
    color: #ff0000;
}
