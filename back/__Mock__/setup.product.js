const { mongoConnect } = require('../config/connect');
const Product = require('../models/product.model');

const data = [
  {
    name: 'Air Max Pre Day',
    brand: 'Nike',
    description:
        'Las Nike Air Max Pre-Day LX llevan el look clásico del legado de Nike Running a un nuevo nivel con un look trepidante para el mundo actual.Confeccionadas con, al menos, un 20 % de materiales reciclados por peso, combinan la estética deportiva retro que más te gusta con una nueva ventana Air para ofrecer un look de máxima energía.',
    sizes_stock: {
      39: 6, 40: 5, 41: 9, 42: 7, 43: 8, 44: 5,
    },
    picture_url: 'https://res.cloudinary.com/dzcc1cx1p/image/upload/v1638222258/shoes/Nike_Air_Max_Pre_Day-removebg-preview_xqsvvy.png',
    prize: 129.99,
    visible: true,
    stock: 100,

  },
  {
    name: 'Waffle Racer 1',
    brand: 'Nike',
    description:
        'Las zapatillas Waffle One lincluyen lo mejor del legado de Nike para correr y tecnología innovadora. El nuevo clip de plástico resistente del talón proporciona la energía de respuesta que necesitas para impulsar tus pasos, mientras que la pala de material mixto y la entresuela acolchada aportan el equilibrio perfecto entre estilo y comodidad. Combínalas con tu conjunto favorito para lucir un look moderno y deportivo.',
    sizes_stock: {
      39: 6, 40: 5, 41: 9, 42: 7, 43: 8, 44: 5,
    },
    picture_url: 'https://res.cloudinary.com/dzcc1cx1p/image/upload/v1638222259/shoes/Nike_Waffle_Racer_1-removebg-preview_vbng3q.png',
    prize: 99.99,
    visible: true,
    stock: 100,

  },
  {
    name: 'HOVR Phantom 2',
    brand: 'Under Armour',
    description:
        'Hemos actualizado nuestras zapatilas de running para hombre más cómodas y les hemos añadido un ajuste similar al de un calcetín y conexión a UA MapMyRun™ para ofrecer consejos y planes de entrenamiento en tiempo real. Disfruta del mismo retorno de energía en una zapatilla nueva y más rápida.',
    sizes_stock: {
      39: 6, 40: 5, 41: 9, 42: 7, 43: 8, 44: 5,
    },
    picture_url: './img/https://res.cloudinary.com/dzcc1cx1p/image/upload/v1638222259/shoes/Under_Armour_HOVR_Phantom_2-removebg-preview_wbpsxj.png-removebg-preview.png',
    prize: 159.99,

    visible: true,
    stock: 100,

  },

  {
    name: 'La Trainer 1',
    brand: 'adidas',
    description: '€ 99,99',
    sizes_stock: {
      39: 6, 40: 5, 41: 9, 42: 7, 43: 8, 44: 5,
    },
    picture_url: 'https://res.cloudinary.com/dzcc1cx1p/image/upload/v1638221763/shoes/adidas_La_Trainer_1-removebg-preview_tm3bu0.png',
    prize: 99.99,
    visible: true,
    stock: 100,

  },

];
async function populateDb() {
  await mongoConnect();
  await Product.deleteMany({});
  await Product.create(data);
}

populateDb();
