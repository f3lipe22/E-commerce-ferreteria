import { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/Sidebar/Rating";


const title = "Lo mas vendido";


const ProductData = [
    {
        imgUrl: 'src/assets/images/categoryTab/01.jpg',
        cate: 'Herramientas',
        title: 'Martillo',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Surtek',
        price: '$199.00',
        id: 1,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/02.jpg',
        cate: 'Electrico',
        title: 'Serrucho',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Ingco',
        price: '$199.00',
        id: 2,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/03.jpg',
        cate: 'Electrico',
        title: 'Taladro',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'Stanley',
        price: '$199.00',
        id: 3,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/04.jpg',
        cate: 'Materiales',
        title: 'Ladrillo N°4',
        author: 'assets/images/course/author/04.jpg',
        brand: 'Sin especificar',
        price: '$199.00',
        id: 4,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/05.jpg',
        cate: 'Electricidad',
        title: 'Bombillo',
        author: 'assets/images/course/author/05.jpg',
        brand: 'Philips',
        price: '$199.00',
        id: 5,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/06.jpg',
        cate: 'Materiales',
        title: 'Cemento',
        author: 'assets/images/course/author/06.jpg',
        brand: 'Argos',
        price: '$199.00',
        id: 6,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/07.jpg',
        cate: 'Tornilleria',
        title: 'Chazo Tornillo ',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Surtek',
        price: '$199.00',
        id: 7,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/08.jpg',
        cate: 'Herramientas',
        title: 'Cizallas',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Makita',
        price: '$199.00',
        id: 8,
    },
]


const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData);
    const filterItem = (categItem) => {
        const updateItems = ProductData.filter((curElem) => {
            return curElem.cate === categItem;
        });
        setItems(updateItems);
    }
  return (
    <div className="course-section style-3 padding-tb">
    <div className="course-shape one"><img src="/src/assets/images/shape-img/icon/01.png" alt="education" /></div>
    <div className="course-shape two"><img src="/src/assets/images/shape-img/icon/02.png" alt="education" /></div>
    <div className="container">

        {/* section header */}
        <div className="section-header">
            <h2 className="title">{title}</h2>
            <div className="course-filter-group">
                <ul className="lab-ul">
                    <li onClick={() => setItems(ProductData) }>Todos</li>
                    <li onClick={() => filterItem('Herramientas') }>Herramientas</li>
                    <li onClick={() => filterItem('Plomeria') }>Plomería</li>
                    <li onClick={() => filterItem('Tornilleria') }>Tornillería</li>
                    <li onClick={() => filterItem('Electricidad') }>Electricidad</li>
                    <li onClick={() => filterItem('Electrico') }>Electrico</li>
                </ul>
            </div>
        </div>

        {/* section body */}
        <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
                { items.map((elem) => {
                    const { id, imgUrl, imgAlt, cate, title, brand, authorName, price } = elem;
                    return (
                        <div className="col" key={id}>
                            <div className="course-item style-4">
                                <div className="course-inner">
                                    <div className="course-thumb">
                                        <img src={imgUrl} alt="" />
                                        <div className="course-category">
                                            <div className="course-cate">
                                                <a href="#">{cate}</a>
                                            </div>
                                            <div className="course-reiew">
                                               <Rating /> 
                                            </div>
                                        </div>
                                    </div>

                                    {/* content  */}
                                    <div className="course-content">
                                        <Link to="/course-single"><h5>{title}</h5></Link>
                                        <div className="course-footer">
                                            <div className="course-author">
                                                <Link to="/team-single" className="ca-name">{brand}</Link>
                                            </div>
                                            <div className="course-price">{price}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) })
                }
            </div>
        </div>
    </div>
</div> 
  )
}

export default CategoryShowCase