function About(){
    const pro =[
        {
        name:'Suit',
        images:'https://ds393qgzrxwzn.cloudfront.net/cat1/img/images/0/LJvr0WJslH.jpg',
        price:'$19.99',
        rating:'5.5',
        id:1
    },
    {
    name:'Top',
    images:'https://th.bing.com/th/id/OIP.qzwtS5ru3JttNywtVlYcvwHaHa?w=640&h=640&rs=1&pid=ImgDetMain',
    price:'$29.99',
    rating:'5',
    id:2
},
{
    name:'jeans',
    images:'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price:'$29.99',
    rating:'5',
    id:3
},
{
    name:'Watch',
    images:'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price:'$29.99',
    rating:'5',
    id:4
},
{
    name:'Top',
    images:'https://th.bing.com/th/id/OIP.qzwtS5ru3JttNywtVlYcvwHaHa?w=640&h=640&rs=1&pid=ImgDetMain',
    price:'$29.99',
    rating:'5',
    id:2
},
{
    name:'jeans',
    images:'https://images.pexels.com/photos/1703249/pexels-photo-1703249.jpeg?auto=compress&cs=tinysrgb&w=600',
    price:'$29.99',
    rating:'5',
    id:3
},
{
    name:'Watch',
    images:'https://images.pexels.com/photos/15878404/pexels-photo-15878404/free-photo-of-back-view-of-a-cute-little-girl-running-on-the-grass.jpeg?auto=compress&cs=tinysrgb&w=600',
    price:'$29.99',
    rating:'5',
    id:4
},
{
    name:'Top',
    images:'https://th.bing.com/th/id/OIP.qzwtS5ru3JttNywtVlYcvwHaHa?w=640&h=640&rs=1&pid=ImgDetMain',
    price:'$29.99',
    rating:'5',
    id:2
},
{
    name:'jeans',
    images:'https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=600',
    price:'$29.99',
    rating:'5',
    id:3
},
{
    name:'Watch',
    images:'https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600',
    price:'$29.99',
    rating:'5',
    id:4
},
{
    name:'Top',
    images:'https://media.istockphoto.com/id/956002732/photo/little-cute-girl-in-dress.jpg?b=1&s=612x612&w=0&k=20&c=-5aIFibm-wynMh5-qnmd7GmJ7TltUlis7W85jOaWHNU=',
    price:'$29.99',
    rating:'5',
    id:2
},
{
    name:'jeans',
    images:'https://images.pexels.com/photos/4921275/pexels-photo-4921275.jpeg?auto=compress&cs=tinysrgb&w=600',
    price:'$29.99',
    rating:'5',
    id:3
},
{
    name:'Watch',
    images:'https://images.pexels.com/photos/987627/pexels-photo-987627.jpeg?auto=compress&cs=tinysrgb&w=600',
    price:'$29.99',
    rating:'5',
    id:4
},
{
    name:'T-shirt',
    images:'https://images.pexels.com/photos/3419692/pexels-photo-3419692.jpeg?auto=compress&cs=tinysrgb&w=600',
    price:'$29.99',
    rating:'5',
    id:5
},
{
    name:'Onepice',
    images:'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600',
    price:'$29.99',
    rating:'5',
    id:6
},

]
return(
        <>
      <section id="cardouter">
        {pro.map(e=>{
            return <div key={e.id}>
                <div class="product-card">
                <div class="product-image">
                    <img src={e.images} alt="product-image"></img>
                    </div>
                <div class="product-details">
                <div class="product-name">{e.name}</div>
                <div class="product-price">{e.price}</div>
                
                     </div>
                     </div>
            </div>
        })}
     </section>
        </>
    );
}
export default About;