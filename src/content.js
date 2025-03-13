const content = {
  home: {
    para1: `Coffee beans are actually the seeds of berries that grow on flowering shrubs, 
    making coffee a fruit-based beverage. These berries, often called 'cherries,' 
    typically contain two seeds, which are then roasted to produce the familiar coffee bean. 
    The roasting process not only develops the characteristic aroma and flavor but also transforms 
    the chemical composition of the seeds, unlocking the stimulating effects of caffeine.`,
    para2: `Beyond its caffeine content, coffee is surprisingly rich in antioxidants, which 
    are compounds that help protect your cells from damage. In fact, coffee is one of the most 
    significant sources of antioxidants in the average diet, offering a complex blend of 
    chlorogenic acids, polyphenols, and other beneficial substances that may contribute to 
    various health benefits, including reduced risk of certain chronic diseases.`,
    para3: `The "buzz" from coffee isn't just a mental effect; caffeine also impacts 
    physical performance. It stimulates the central nervous system, increasing 
    alertness and reducing perceived exertion, which can lead to improved 
    endurance and strength during workouts. This is why many athletes consume 
    coffee before training or competition, and why caffeine is a common 
    ingredient in pre-workout supplements.`
  },
  coffeeTypes: {
    "Arabica": {
      description: `Known for its smooth, mild flavor with notes of chocolate, nuts, and fruit. 
      It's the most popular coffee type, prized for its lower acidity and complex aromatics. 
      Typically grown at higher altitudes.`,
      flavorProfile: ["Smooth", "Mild", "Chocolate", "Nutty", "Fruity"],
    },
    "Robusta": {
      description: `Has a stronger, more bitter flavor with higher caffeine content than Arabica. 
      Often used in espresso blends for its crema production. 
      It's more resistant to disease and can be grown at lower altitudes.`,
      flavorProfile: ["Strong", "Bitter", "Earthy", "Woody"],
    },
    "Liberica": {
      description: `Distinctive for its large, irregularly shaped beans and smoky, woody flavor with notes of floral and spicy undertones. 
      It's less common and considered an acquired taste.`,
      flavorProfile: ["Smoky", "Woody", "Floral", "Spicy"],
    },
    "Excelsa": {
      description: `Technically a variety of Liberica, Excelsa beans have a tart, fruity flavor with a dark, roasted profile. 
      They contribute a unique middle note to blends, adding complexity and depth.`,
      flavorProfile: ["Tart", "Fruity", "Roasted", "Complex"],
    },
    "Typica": {
      description: `One of the oldest and most classic Arabica varieties. 
      Known for its clean, sweet flavor with a delicate body. 
      It's susceptible to disease but highly regarded for its quality.`,
      flavorProfile: ["Clean", "Sweet", "Delicate"],
    },
    "Bourbon": {
      description: `A mutation of Typica, Bourbon beans are known for their sweet, caramelly flavor with a bright acidity. 
      It's a popular and highly regarded Arabica variety.`,
      flavorProfile: ["Sweet", "Caramelly", "Bright Acidity"],
    },
    "Gesha (Geisha)":{
      description: `Highly sought after and expensive arabica variety. 
      Known for its floral, tea like, and citrus notes. 
      Very delicate and complex flavor profiles.`,
      flavorProfile: ["Floral", "Tea-like", "Citrus", "Complex"],
    }
  },
  coffeeOrigins: {
    "Ethiopia": {
      description: `Widely considered the birthplace of coffee, Ethiopia produces beans with diverse flavor profiles. 
      Known for floral, fruity, and wine-like notes, often with a bright acidity. 
      Regions like Yirgacheffe, Sidamo, and Guji are renowned for their high-quality Arabica.`,
      flavorProfile: ["Floral", "Fruity", "Wine-like", "Bright Acidity"],
      commonVarieties: ["Heirloom", "Yirgacheffe", "Sidamo", "Guji"],
    },
    "Colombia": {
      description: `Colombia is famous for its mild, well-balanced Arabica coffee. 
      Expect notes of caramel, nuts, and citrus, with a medium body and acidity. 
      The coffee is often washed, resulting in a clean and consistent flavor. 
      Regions like Antioquia, Huila, and Nariño are key producers.`,
      flavorProfile: ["Caramel", "Nutty", "Citrus", "Well-balanced"],
      commonVarieties: ["Castillo", "Colombia", "Typica", "Bourbon"],
    },
    "Brazil": {
      description: `As the world's largest coffee producer, Brazil offers a wide range of flavors. 
      Generally, Brazilian coffee is known for its nutty, chocolatey, and sweet notes, with a low acidity and full body. 
      The Cerrado, Sul de Minas, and Mogiana regions are major growing areas.`,
      flavorProfile: ["Nutty", "Chocolatey", "Sweet", "Low Acidity"],
      commonVarieties: ["Bourbon", "Catuai", "Mundo Novo"],
    },
    "Vietnam": {
      description: `Vietnam is the world's second-largest coffee producer, primarily focusing on Robusta beans. 
      Vietnamese coffee is known for its strong, bitter, and earthy flavors, with a high caffeine content. 
      Often used in traditional Vietnamese iced coffee (Cà phê sữa đá).`,
      flavorProfile: ["Strong", "Bitter", "Earthy", "High Caffeine"],
      commonVarieties: ["Robusta"],
    },
    "Indonesia": {
      description: `Indonesia, with islands like Sumatra, Java, and Sulawesi, produces a diverse range of coffee. 
      Sumatran coffee is known for its earthy, herbal, and spicy notes, often with a heavy body and low acidity. 
      Javanese coffee is typically sweet and clean. 
      Sulawesi coffee is known for its nutty and spicy notes.`,
      flavorProfile: ["Earthy", "Herbal", "Spicy", "Nutty"],
      commonVarieties: ["Sumatra Mandheling", "Java Arabica", "Sulawesi Toraja"],
    },
    "Kenya": {
      description: `Kenyan coffee is highly regarded for its bright acidity, complex fruit flavors, and wine-like notes. 
      Expect berries, citrus, and blackcurrant. 
      The high altitudes and meticulous processing contribute to the exceptional quality.`,
      flavorProfile: ["Bright Acidity", "Fruity", "Wine-like", "Complex"],
      commonVarieties: ["SL28", "SL34"],
    },
    "Guatemala": {
      description: `Guatemalan coffee offers a wide range of flavors, depending on the region. 
      Generally, expect chocolate, caramel, and nutty notes, with a medium body and acidity. 
      Regions like Antigua, Huehuetenango, and Atitlán are well-known.`,
      flavorProfile: ["Chocolate", "Caramel", "Nutty", "Medium Body"],
      commonVarieties: ["Bourbon", "Catuai", "Pacamara"],
    },
    "Yemen": {
      description: `Yemen is one of the oldest coffee-producing countries, known for its unique and complex flavors. 
      Expect winey, fruity, and chocolatey notes, often with a syrupy body. 
      The beans are typically dried naturally, contributing to their distinctive character.`,
      flavorProfile: ["Winey", "Fruity", "Chocolatey", "Syrupy"],
      commonVarieties: ["Typica", "Mocha"],
    }
  }
};

export default content;