import "./styles.css";
import { useState } from "react";

const foodDB = {
  chineseFood: [
    {
      name: "Momos",
      rating: "4.5/5",
      desc:
        "Momo is a type of steamed dumpling with some form of filling. Momo has become a traditional delicacy in Nepal, Tibet, as well as among Nepalese and Tibetan communities in Bhutan, as well as people of the Indian regions of Darjeeling, Ladakh, Sikkim, Assam, and Arunachal Pradesh."
    },

    {
      name: "Chowmein",
      rating: "4.6/5",
      desc:
        "The words chow mein mean stir-fried noodles, also loosely translating to fried noodle in English, chow meaning stir-fried (or sautéed) and mein meaning noodles. The pronunciation chow mein is an English corruption of the Toisanese pronunciation chāu-mèn.[citation needed] The Toisan dialect was spoken by migrants to North America from Toisan."
    },

    {
      name: "Fried Rice",
      rating: "5/5",
      desc:
        "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish."
    },

    {
      name: "Manchurian",
      rating: "4.7/5",
      desc:
        "Manchurian is a class of Indian dishes made by roughly chopping and deep-frying a main ingredient like chicken, cauliflower (gobi), prawns, fish, mutton or paneer and then sautéeing it in a sauce flavored with soy sauce."
    },

    {
      name: "Spring Rolls",
      rating: "4.7/5",
      desc:
        "Spring rolls are filled with minced vegetables, seafood, poultry, or meat, folded into a food wrapper made from dough or rice paper that is rolled after being folded and is then baked, deep fried, or steamed."
    }
  ],
  northIndian: [
    {
      name: "Chhole bhature",
      rating: "5/5",
      desc:
        "Chole bhature is a food dish popular in the Northern areas of the India.It is a combination of chana masala and bhatura/puri, a fried bread made from maida.Although it is known as a typical Punjabi dish, there are varied claims around the origin of dish."
    },

    {
      name: "Samosa",
      rating: "4.8/5",
      desc:
        "Samosa, a crispy and spicy deep fried snack that has an crisp and flaky outer layer made of maida and rich filling of mashed potato, peas and spices is a popular street food of India. It's a favorite snack among people of all ages and generally served with masala tea and tamarind chutney as afternoon snack."
    },

    {
      name: "Dahi Bhalla",
      rating: "4.7/5",
      desc:
        "Dahi Bhalla is a sumptuous dish, made with curd and some easily available spices and veggies.If you are a spice lover, you can add finely chopped green chilies or else you can use a pinch of red chilli powder to spice up the fluffy bhalla."
    }
  ],
  southIndian: [
    {
      name: "Uttapam",
      rating: "4.5/5",
      desc:
        "A dosa-like dish made by cooking ingredients in a batter. Unlike a dosa, which is crisp and crepe-like, uttapam is a thick pancake, with toppings cooked right into the batter. Uttapam is sometimes characterized as an Indian pizza."
    },

    {
      name: "Puttu",
      rating: "4.7/5",
      desc:
        "Puttu means portioned in Tamil and Malayalam. It is made of steamed cylinders of ground rice layered with coconut shavings, sometimes with a sweet or savory filling on the inside."
    },

    {
      name: "Sambar",
      rating: "4.8/5",
      desc:
        "Sambar is a South Indian lentil and vegetable stew made with pigeon pea lentils, tamarind and a unique spice blend called sambar powder. It is a staple dish in South Indian homes and is also equally popular and loved by many."
    },

    {
      name: "Masala Dosa",
      rating: "4.7/5",
      desc:
        "Masala Dosa or Masale Dose is a variant of the popular South Indian food. Masala Dosa is a thin crisp dosa, consumed with a spicy potato sabji. Masala Dosa is made from rice, potato, methi, curry leaves and served with Chutneys and Sambar. Though it was only popular in South India, it can be found almost in all other parts of the country, and even outside the country now."
    }
  ]
};

export default function App() {
  const [selectedFood, setFood] = useState("southIndian");

  function foodClickHandler(foodname) {
    setFood(foodname);
  }

  return (
    <div className="App">
      <header className="head">
        <h1>🍕goodFood</h1>
        <p style={{ fontSize: "smaller", color: "black" }}>
          Checkout my favorite food. Select a type of food to get started
        </p>
      </header>
      <div className="food-type">
        {Object.keys(foodDB).map((foodname) => (
          <button key={foodname} onClick={() => foodClickHandler(foodname)}>
            {foodname}
          </button>
        ))}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedFood].map((item) => (
            <li key={item.name} className="food-items">
              <div style={{ fontSize: "larger", textAlign: "center" }}>
                {" "}
                {item.name}{" "}
              </div>
              <div
                style={{
                  fontSize: "smaller",
                  textAlign: "center",
                  paddingTop: ".5rem"
                }}
              >
                {" "}
                {item.rating}{" "}
              </div>
              <p className="item-description">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
