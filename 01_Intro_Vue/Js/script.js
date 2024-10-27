const app = Vue.createApp({
    data() {
        return {
            product: 'Dark Magician',
            description: 'El mago definitivo en términos de ataque y defensa.',
            type: 'Monstruo/Efecto',
            attack: '2500',
            defense: '2100',
            image: 'imagenes/Char_T-34.jpg',
            inStock: true,
            releaseDate: '1996-01-01',
            rarity: 'Ultra Rare',
            inventory: 5, 
            onSale: true,
            details: ['Carta de primer edición', 'Incluye funda protectora', 'Perfecta condición'],
            variants: [
                {id: 2310, color: 'Oscuro', rarity: 'Ultra Rare'},
                {id: 2311, color: 'Más oscuro', rarity: 'Rare'},
                {id: 2312, color: 'Claro', rarity: 'Common'}
            ],
            cartCount: 0
        };
    },
    methods: {
        addToCart() {
            this.cartCount++;
        }
    }
});
