const livros = [
    {
        "nome_pessoa": "Alonso Quijano",
        "titulo": "Dom Quixote",
        "imagem" :"https://www.moderna.com.br/data/files/D9/02/CA/FC/ABF29310DABB929338A8A8A8/Capa_Dom%20Quixote_FINAL2-1.jpg",
        "data": "20/03/1605",
        "numero": "551112345678"
      },
      {
        "nome_pessoa": "Elizabeth Bennet",
        "titulo": "Orgulho e Preconceito",
        "imagem": "https://m.media-amazon.com/images/I/51tkPAkbdWL._SY445_SX342_.jpg",
        "data": "12/11/1813",
        "numero": "5511987654321"
      },
      {
        "nome_pessoa": "Winston Smith",
        "titulo": "1984",
        "imagem":"https://m.media-amazon.com/images/I/61t0bwt1s3L._SL1000_.jpg",
        "data": "04/05/1949",
        "numero": "441234567890"
      },
      {
        "nome_pessoa": "Jay Gatsby",
        "titulo": "O Grande Gatsby",
        "imagem":"https://m.media-amazon.com/images/I/81xjr9TiTtL._SL1500_.jpg",
        "data": "07/09/1925",
        "numero": "12125551212"
      },
      {
        "nome_pessoa": "José Arcadio Buendía",
        "titulo": "Cem Anos de Solidão",
        "imagem": "https://m.media-amazon.com/images/I/515cVYLIP9L._SY445_SX342_.jpg",
        "data": "30/07/1967",
        "numero": "571234567890"
      },
      {
        "nome_pessoa": "Gregor Samsa",
        "titulo": "A Metamorfose",
        "imagem":"https://d1b6q258gtjyuy.cloudfront.net/Custom/Content/Products/07/49/0749_https-www-escala-com-br-a-metamorfose-franz-kafka-p2036-_z1_637957496052979369.jpg",
        "data": "03/07/1915",
        "numero": "491234567890"
      },
      {
        "nome_pessoa": "Ishmael",
        "titulo": "Moby Dick",
        "imagem": "https://m.media-amazon.com/images/I/91gf2wtlaZL._AC_UY218_.jpg",
        "data": "15/10/1851",
        "numero": "12025551212"
      },
      {
        "nome_pessoa": "Raskólnikov",
        "titulo": "Crime e Castigo",
        "imagem": "https://www.lpm.com.br/livros/Imagens/crime_e_castigo_hq_9788525434104_g.jpg",
        "data": "22/04/1866",
        "numero": "791234567890"
      },
      {
        "nome_pessoa": "Napoleão",
        "titulo": "A Revolução dos Bichos",
        "imagem": "https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UY218_.jpg",
        "data": "09/12/1945",
        "numero": "331234567890"
      },
      {
        "nome_pessoa": "Leopold Bloom",
        "titulo": "Ulisses",
        "imagem": "https://m.media-amazon.com/images/I/71Wj1G02L9L._AC_UY218_.jpg",
        "data": "02/02/1922",
        "numero": "353123456789"
      },
      {
        "nome_pessoa": "Holden Caulfield",
        "titulo": "O Apanhador no Campo de Centeio",
        "imagem": "https://m.media-amazon.com/images/I/41wWpV5fRUL.jpg",
        "data": "18/12/1951",
        "numero": "12125551212"
      },
      {
        "nome_pessoa": "Frodo Bolseiro",
        "titulo": "O Senhor dos Anéis",
        "imagem": "https://m.media-amazon.com/images/I/81SM0D5+DwL._AC_UY218_.jpg",
        "data": "21/09/1954",
        "numero": "441234567890"
      },
      {
        "nome_pessoa": "Perry Smith",
        "titulo": "A Sangue Frio",
        "imagem": "https://m.media-amazon.com/images/I/91gXfoXb+CL._SL1500_.jpg",
        "data": "08/06/1966",
        "numero": "12025551212"
      },
      {
        "nome_pessoa": "Liesel Meminger",
        "titulo": "A Menina que Roubava Livros",
        "imagem": "https://m.media-amazon.com/images/I/61L+4OBhm-L._AC_UY218_.jpg",
        "data": "25/08/2005",
        "numero": "491234567890"
      },
      {
        "nome_pessoa": "Atticus Finch",
        "titulo": "O Sol é para Todos",
        "imagem": "https://m.media-amazon.com/images/I/91WKPd60P4L._AC_UY218_.jpg",
        "data": "10/07/1960",
        "numero": "12025551212"
      },
      {
        "nome_pessoa": "Jon Snow",
        "titulo": "A Guerra dos Tronos",
        "imagem": "https://m.media-amazon.com/images/I/91+1SUO3vUL._SL1500_.jpg",
        "data": "15/11/1996",
        "numero": "441234567890"
      },
      {
        "nome_pessoa": "Heathcliff",
        "titulo": "O Morro dos Ventos Uivantes",
        "imagem": "https://m.media-amazon.com/images/I/71lqmkoeosL._AC_UY218_.jpg",
        "data": "05/12/1847",
        "numero": "441234567890"
      },
      {
        "nome_pessoa": "Anne Frank",
        "titulo": "O Diário de Anne Frank",
        "imagem": "https://m.media-amazon.com/images/I/51FcYCljAJL._SY445_SX342_.jpg",
        "data": "12/06/1947",
        "numero": "491234567890"
      },
      {
        "nome_pessoa": "Dorian Gray",
        "titulo": "O Retrato de Dorian Gray",
        "imagem": "https://m.media-amazon.com/images/I/51REmr5NmnL._AC_UY218_.jpg",
        "data": "20/05/1890",
        "numero": "441234567890"
      },
      {
        "nome_pessoa": "Jean Valjean",
        "titulo": "Os Miseráveis",
        "imagem": "https://m.media-amazon.com/images/I/A1Ed0Pyt4HL._SL1500_.jpg",
        "data": "30/03/1862",
        "numero": "331234567890"
      },
      {
        "nome_pessoa": "John Galt",
        "titulo": "A Revolta de Atlas",
        "imagem": "https://m.media-amazon.com/images/I/61TBpAXtcxL._AC_UY218_.jpg", 
        "data": "11/02/1957",
        "numero": "12025551212"
      },
      {
        "nome_pessoa": "Robert Langdon",
        "titulo": "O Código Da Vinci",
        "imagem": "https://m.media-amazon.com/images/I/91QSDmqQdaL._SL1500_.jpg",
        "data": "18/09/2003",
        "numero": "441234567890"
      },
      {
        "nome_pessoa": "O Príncipe",
        "titulo": "O Pequeno Príncipe",
        "imagem": "https://m.media-amazon.com/images/I/710Nd+Itq+L._AC_UY218_.jpg",
        "data": "02/04/1943",
        "numero": "331234567890"
      },
      {
        "nome_pessoa": "Dolores Haze",
        "titulo": "Lolita",
        "imagem": "https://images-americanas.b2w.io/produtos/5171578456/imagens/usado-lolita/5171578456_1_large.jpg",
        "data": "19/08/1955",
        "numero": "12025551212"
      },
      {
        "nome_pessoa": "Kvothe",
        "titulo": "O Nome do Vento",
        "imagem": "https://faru.wordpress.com/wp-content/uploads/2010/12/nomedovento_post1.jpg",
        "data": "30/06/2007",
        "numero": "491234567890"
      },
      {
        "nome_pessoa": "Art Spiegelman",
        "titulo": "Maus",
        "imagem": "https://cdn11.bigcommerce.com/s-3rl2qg0z2p/images/stencil/1280x1280/products/3007/15258/15258__66885.1658168660.jpg",
        "data": "03/10/1986",
        "numero": "12025551212"
      },
      {
        "nome_pessoa": "Bilbo Bolseiro",
        "titulo": "O Hobbit",
        "imagem": "https://images.tcdn.com.br/img/img_prod/1151656/livro_o_hobbit_capa_dura_j_r_r_tolkien_197_1_c0a251bc4527ee00a6f957d8eeaf7e3c.jpg",
        "data": "21/09/1937",
        "numero": "441234567890"
      },
      {
        "nome_pessoa": "Charles Duhigg",
        "titulo": "O Poder do Hábito",
        "imagem": "https://assets-global.website-files.com/62e89931273b5c21be76c486/6466ac1e464a40501047a2ec_o-poder-do-habito.jpeg",
        "data": "05/03/2012",
        "numero": "12025551212"
      },
      {
        "nome_pessoa": "Aslan",
        "titulo": "As Crônicas de Nárnia",
        "imagem": "https://m.media-amazon.com/images/I/71yfYZRc8nL._SY466_.jpg",
        "data": "15/12/1950",
        "numero": "441234567890"
      }
  ];
  
  export default livros;
  