const {
  db,
  Hunts,
  Paintings,
  Teachers,
  Students,
  Museums,
} = require('./server/db');
const { green, red } = require('chalk');

const seed = async () => {
  await db.sync({ force: true });

  const metropolitanHunt = await Hunts.create({
    name: 'The Metropolitan Museum of Art',
    description: 'Learn about the Metropolitan Museum of Art',
  });

  const modernArtHunt = await Hunts.create({
    name: 'The Museum of Modern Art',
    description: 'Learn about the Museum of Modern Art',
  });

  const whitneyHunt = await Hunts.create({
    name: 'The Whitney Museum of American Art',
    description: 'Learn about the Whitney Museum of American Art',
  });

  const museums = [
    {
      name: 'The Metropolitan Museum of Art',
      lat: 40.780081,
      lng: -73.963343,
    },
    {
      name: 'The Museum of Modern Art',
      lat: 40.762139,
      lng: -73.977559,
    },
    {
      name: 'The Whitney Museum of American Art',
      lat: 40.739823,
      lng: -74.008831,
    },
  ];
  const paintings = [
    {
      name: 'Madame X',
      artist: 'John Singer Sargent',
      imageUrl:
        'https://collectionapi.metmuseum.org/api/collection/v1/iiif/12127/33591/restricted',
      museum: 'Metropolitan Museum of Art',
      description:
        'Madame Pierre Gautreau (the Louisiana-born Virginie Amélie Avegno; 1859–1915) was known in Paris for her artful appearance. Sargent hoped to enhance his reputation by painting and exhibiting her portrait. Working without a commission but with his sitter’s complicity, he emphasized her daring personal style, showing the right strap of her gown slipping from her shoulder. At the Salon of 1884, the portrait received more ridicule than praise. Sargent repainted the shoulder strap and kept the work for over thirty years. When, eventually, he sold it to the Metropolitan, he commented, “I suppose it is the best thing I have done,” but asked that the Museum disguise the sitter’s name.',
      huntId: metropolitanHunt.id,
    },
    {
      name: 'Self-Portrait with a Straw Hat (obverse: The Potato Peeler)',
      artist: 'Vincent van Gogh',
      imageUrl:
        'https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image',
      museum: 'Metropolitan Museum of Art',
      description: `Van Gogh produced more than twenty self-portraits during his Parisian sojourn (1886–88). Short of funds but determined nevertheless to hone his skills as a figure painter, he became his own best sitter: "I purposely bought a good enough mirror to work from myself, for want of a model." This picture, which shows the artist's awareness of Neo-Impressionist technique and color theory, is one of several that are painted on the reverse of an earlier peasant study.`,
      huntId: metropolitanHunt.id,
    },
    {
      name: 'Springtime',
      artist: 'Pierre-Auguste Cot',
      imageUrl:
        'https://collectionapi.metmuseum.org/api/collection/v1/iiif/438158/799953/main-image',
      museum: 'Metropolitan Museum of Art',
      description:
        'This flirtatious duo in classicizing dress, painted with notable technical finesse, reflects Cot’s allegiance to the academic style of his teachers, including Bouguereau and Cabanel. Exhibited at the Salon of 1873, the picture was Cot’s greatest success, widely admired and copied in engravings, fans, porcelains, and tapestries. Its first owner, hardware tycoon John Wolfe, awarded the work a prime spot in his Manhattan mansion, where visitors delighted in "this reveling pair of children, drunken with first love ... this Arcadian idyll, peppered with French spice." Wolfe’s cousin, Catharine Lorillard Wolfe, later commissioned a similar scene from Cot, The Storm, now also in the Metropolitan’s collection (87.15.134)',
      huntId: metropolitanHunt.id,
    },
    {
      name: 'Bridge over a Pond of Water Lilies',
      artist: 'Claude Monet',
      imageUrl:
        'https://collectionapi.metmuseum.org/api/collection/v1/iiif/437127/796089/restricted',
      museum: 'Metropolitan Museum of Art',
      description:
        'In 1893, Monet, a passionate horticulturist, purchased land with a pond near his property in Giverny, intending to build something "for the pleasure of the eye and also for motifs to paint." The result was his water-lily garden. In 1899, he began a series of eighteen views of the wooden footbridge over the pond, completing twelve paintings, including the present one, that summer. The vertical format of the picture, unusual in this series, gives prominence to the water lilies and their reflections on the pond.',
      huntId: metropolitanHunt.id,
    },
    {
      name: 'Madonna and Child',
      artist: 'Duccio di Buoninsegna',
      imageUrl:
        'https://collectionapi.metmuseum.org/api/collection/v1/iiif/438754/794829/main-image',
      museum: 'Metropolitan Museum of Art',
      description:
        'This lyrical work inaugurates the grand tradition in Italian art of envisioning the sacred figures of the Madonna and Child in terms appropriated from real life. The Christ Child gently pushes away the veil of his mother, whose sorrowful expression reflects her foreknowledge of his crucifixion. The beautifully modeled drapery enhances their three-dimensional, physical presence and the parapet connects the fictive, sacred world of the painting with the temporal one of the viewer. The bottom edge of the original frame is marked by candle burns.',
      huntId: metropolitanHunt.id,
    },
    {
      name: 'The Storm',
      artist: 'Pierre-Auguste Cot',
      imageUrl:
        'https://collectionapi.metmuseum.org/api/collection/v1/iiif/435997/797712/main-image',
      museum: 'Metropolitan Museum of Art',
      description: `When Cot exhibited this painting at the Salon of 1880, critics speculated about the source of the subject. Some proposed the French novel Paul and Virginie by Bernardin de Saint-Pierre (1737–1814), in which the teenage protagonists run for shelter in a rainstorm, using the heroine’s overskirt as an impromptu umbrella; others suggested the romance Daphnis and Chloe by the ancient Greek writer Longus. New York collector and Metropolitan Museum benefactor Catharine Lorillard Wolfe commissioned the work under the guidance of her cousin John Wolfe, one of Cot's principal patrons. Like the artist’s earlier Springtime (2012.575), it was immensely popular and extensively reproduced.`,
      huntId: metropolitanHunt.id,
    },
    {
      name: 'The Persistence of Memory',
      artist: 'Salvador Dalí',
      imageUrl:
        'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b',
      museum: 'Museum of Modern Art',
      description: `Dalí rendered his fantastic visions with meticulous verisimilitude, giving the representations of dreams a tangible and credible appearance. In what he called "hand painted dream photographs," hard objects become inexplicably limp, time bends, and metal attracts ants like rotting flesh. The monstrous creature draped across the painting's center resembles the artist's own face in profile; its long eyelashes seem insectlike or even sexual, as does what may or may not be a tongue oozing from its nose like a fat snail.`,
      huntId: modernArtHunt.id,
    },
    {
      name: 'Drowning Girl',
      artist: 'Roy Lichtenstein',
      imageUrl:
        'http://www.moma.org/media/W1siZiIsIjIzNzM1NSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=02a005d35e63047d',
      museum: 'Museum of Modern Art',
      description: `Lichtenstein based many of his early paintings on imagery he found in comic books. The source for this work is Run for Love! published by DC Comics in 1962, the cover of which the artist significantly altered to arrive at the finished composition. In the original illustration, the drowning girl’s boyfriend appears in the background, clinging to a capsized boat. Lichtenstein cropped the image dramatically, showing the girl alone and encircled by a threatening wave. He changed the caption from “I don’t care if I have a cramp!” to “I don’t care!” and the boyfriend’s name from Mal to Brad. In addition to appropriating comic books’ melodramatic content, Lichtenstein manually simulated the Benday dots used in the mechanical reproduction of images.`,
      huntId: modernArtHunt.id,
    },
    {
      name: 'The Sleeping Gypsy',
      artist: 'Henri Rousseau',
      imageUrl:
        'http://www.moma.org/media/W1siZiIsIjE1MTQzNCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=ae96105416071a99',
      museum: 'Museum of Modern Art',
      description: `Rousseau, a toll collector for the city of Paris, was largely a self-taught painter, although he had ambitions of entering the Academy. This was never realized, but the sharp colors, fantastic imagery, and precise outlines in his work—derived from the style and subject matter of popular print culture—struck a chord with a younger generation of avant-garde painters. Rousseau described the subject of The Sleeping Gypsy thus: "A mandolin player, lies with her jar beside her (a vase with drinking water), overcome by fatigue in a deep sleep. A lion chances to pass by, picks up her scent yet does not devour her. There is a moonlight effect, very poetic."`,
      huntId: modernArtHunt.id,
    },
    {
      name: 'The Starry Night',
      artist: 'Vincent van Gogh',
      imageUrl:
        'http://www.moma.org/media/W1siZiIsIjEzMzA3NSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=df9568c2c27b4c27',
      museum: 'Museum of Modern Art',
      description: `"This morning I saw the country from my window a long time before sunrise, with nothing but the morning star, which looked very big," van Gogh wrote to his brother Theo, from France. Rooted in imagination and memory, The Starry Night embodies an inner, subjective expression of van Gogh's response to nature. In thick, sweeping brushstrokes, a flamelike cypress unites the churning sky and the quiet village below. The village was partly invented, and the church spire evokes van Gogh's native land, the Netherlands.`,
      huntId: modernArtHunt.id,
    },
    {
      name: `Campbell's Soup Cans`,
      artist: 'Andy Warhol',
      imageUrl:
        'http://www.moma.org/media/W1siZiIsIjMxODI0MiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=269531510f1f9eb6',
      museum: 'Museum of Modern Art',
      description: `When Warhol first exhibited these thirty-two canvases in 1962, each one simultaneously hung from the wall like a painting and rested on a shelf like groceries in a store. The number of canvases corresponds to the varieties of soup then sold by the Campbell Soup Company. Warhol assigned a different flavor to each painting, referring to a product list supplied by Campbell's. There is no evidence that Warhol envisioned the canvases in a particular sequence.`,
      huntId: modernArtHunt.id,
    },
    {
      name: `Three Musicians`,
      artist: 'Pablo Picasso',
      imageUrl:
        'http://www.moma.org/media/W1siZiIsIjQzMDY2NCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=aef88bb99e7d2597',
      museum: 'Museum of Modern Art',
      description: `At the left of a bare and boxlike space, a masked Pierrot plays the clarinet. At the right, a singing monk holds sheet music. And in the center, strumming a guitar, is a Harlequin, in Picasso's art a recurring stand-in for the artist himself.
      Pierrot and Harlequin are stock characters in the old Italian comic theater known as commedia dell'arte, a familiar theme in Picasso's work. The painting, then, has a whimsical side, epitomized by the near-invisible dog: its head is about halfway up the canvas on the left, one of several subtle browns, and we can also make out front paws, a hind leg, and a jaunty tail popping up between Harlequin's legs. Overall, though, the work's somber background and large size make the musicians a solemn, even majestic trio.
      The intricate, jigsaw-puzzle-like composition sums up the Synthetic Cubist style, the flat planes of unshaded color recalling the cutout and pasted paper forms with which the style began. These overlapping shapes are at their most complex at the center of the picture, which is also where the lightest hues are concentrated, so that an aura of darkness surrounds a brighter center. Along with the frontal poses of the figures, this creates a feeling of gravity and monumentality, and gives Three Musicians a mysterious, otherworldly air.`,
      huntId: modernArtHunt.id,
    },
    {
      name: `Baby`,
      artist: 'Emma Amos',
      imageUrl:
        'https://whitney.org/uploads/image/file/822364/xlarge_T.2018.88a-b_Amos.jpg',
      museum: 'Whitney Museum of American Art',
      description: `In the early 1960s, Emma Amos began to create imagery that shifted fluidly between abstraction and representation. She was the youngest and only female member of Spiral—a New York–based collective founded by Charles Alston, Romare Bearden, Norman Lewis, and Hale Woodruff in 1963 to consider art’s relationship to civil rights. Amos resisted the idea of a singular Black aesthetic, which put her at odds with artists who insisted on direct, often figurative, depictions to address racial politics. As she later stated: “Every time I think about color it’s a political statement."`,
      huntId: whitneyHunt.id,
    },
    {
      name: `Gettin' Religion`,
      artist: 'Archibald John Motley, Jr.',
      imageUrl:
        'http://collectionimages.whitney.org/standard/224244/largerpage.jpg',
      museum: 'Whitney Museum of American Art',
      description: `Gettin’ Religion (1948), acquired by the Whitney in January, is the first work by Archibald Motley to become part of the Museum’s permanent collection. Motley was the subject of the retrospective exhibition Archibald Motley: Jazz Age Modernist, organized by the Nasher Museum at Duke University, which closed at the Whitney earlier this year. It was described as a “crucial acquisition” by curator and director of the collection Dana Miller.`,
      huntId: whitneyHunt.id,
    },
    {
      name: `Baptism in Kansas`,
      artist: 'John Steuart Curry',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/f/fd/31.159_curry_imageprimacy_800-676x548.jpg',
      museum: 'Whitney Museum of American Art',
      description: `Baptism in Kansas recalls a scene that John Steuart Curry witnessed in 1915 in the devout religious community of his childhood: the local creeks were dried up, and the only suitable site for a full-submersion baptism was a water tank. In the painting, the circle of pious hymn singers, the row of Ford Model-T cars, and the receding prairie provide a counterpoint to the dynamic postures of the preacher and young woman at the moment they begin her submersion. Hovering above the pair, and suggesting a divine presence, is a raven and a dove, the birds that Noah released from the ark after the Flood. When the painting was first exhibited in 1928 at the Corcoran Gallery in Washington, D.C., critics hailed its assertive portrayal of rural American values, which marked a departure from the urban imagery and abstracted landscapes of contemporary American modernism. Curry’s vision of an idealized American heartland signaled the emergence of Regionalism, the movement that glorified grassroots rural values during the poverty-stricken years of the Great Depression.`,
      huntId: whitneyHunt.id,
    },
    {
      name: `Marilyn Pursued by Death`,
      artist: 'Rosalyn Drexler',
      imageUrl:
        'http://collectionimages.whitney.org/standard/236805/largepage.jpg',
      museum: 'Whitney Museum of American Art',
      description: `Marilyn Pursued by Death features the Hollywood actress Marilyn Monroe in a black skirt, white shirt and black sunglasses hurriedly rushing as if in an attempt to move off the right side of the canvas on which she is painted. Behind her a man in black pants, white shirt, and black sunglasses pursues her. Both figures are outlined in red, which makes their figures stand out vibrantly against the black background.
      Drexler's depiction of Monroe is full of motion, a figure imbued with a sense of animation and vitality. Unlike other Pop artists who also used images of the famous actress as a subject, such as Andy Warhol, here the actress is not simply a two-dimensional subject. In this work, Drexler uses Monroe as a vehicle to implicitly make statements about the treatment of women in society. Despite her talent, Monroe was objectified by men and treated as a subject more than a person, as seen here as she is relentlessly pursued by a paparazzo, fan or admirer. Whilst the original photograph upon which this image is based shows that the man is in fact Monroe's bodyguard, Drexler's repurposing allows Monroe to become a representation of the objectification of women and their fight to rise above having their worth defined by just the male gaze.`,
      huntId: whitneyHunt.id,
    },
    {
      name: `Landscape`,
      artist: 'Yasuo Kuniyoshi',
      imageUrl:
        'https://uploads1.wikiart.org/images/yasuo-kuniyoshi/landscape-1924.jpg!Large.jpg',
      museum: 'Whitney Museum of American Art',
      description: `During the 1920s, Yasuo Kuniyoshi painted landscape compositions based on the rugged coastal setting of Ogunquit, Maine, where he spent his summers. Like contemporaneous works of this period, Landscape portrays its subject from a low viewpoint; its dream-like composition is marked by odd relationships of scale, such as the oversize prominence of the leaves in the foreground. Like Marsden Hartley, John Marin, and other American artists of this era, Kuniyoshi used a semi-abstracted modernist language to mine the personal qualities of the American landscape, transforming it into a vehicle for conveying mood and emotion.`,
      huntId: whitneyHunt.id,
    },
    {
      name: `Dam at Fort Peck, Montana`,
      artist: 'Margaret Bourke-White',
      imageUrl:
        'https://www.artic.edu/iiif/2/869243bb-db2c-ebb8-bd8b-a4129977262c/full/1200,/0/default.jpg?w=1200&h=800&fit=crop',
      museum: 'Whitney Museum of American Art',
      description: `Margaret Bourke-White’s photograph Dam at Fort Peck was reproduced on the cover of the inaugural issue of Life, published on November 23, 1936. Publisher Henry Luce had sent Bourke-White, one of four photojournalists originally hired by the magazine, to shoot a chain of dams being constructed on the Missouri River in northeast Montana under the Public Works Administration agency of President Franklin D. Roosevelt’s New Deal. Fort Peck was the highest of these and the world’s largest earth-filled dam. Bourke-White’s image reveals her ability to impart grace and majesty to the bleak, utilitarian forms of industrial architecture. The dam’s massive concrete spillway piers, which stretch to the edges of the image, evoke the soaring walls of ancient monuments, or crenellated castle towers. Bourke-White’s close cropping has them reaching the clouds and dwarfing a pair of human subjects. Luce’s choice of this photograph for his first cover was both canny and strategic: Dam at Fort Peck embodies a machine-age optimism that was likely well-received by a country hobbled by the Great Depression.`,
      huntId: whitneyHunt.id,
    },
  ];
  const teachers = [
    {
      name: 'Jess Bracht',
      userName: 'jess@GH.com',
      password: '123',
    },
    {
      name: 'Dan Sohval',
      userName: 'dan@GH.com',
      password: '123',
    },
  ];

  const students = [
    {
      name: 'Rachel Reinauer',
      userName: 'rayray',
      password: '123',
    },
    {
      name: 'Ahsun Kim',
      userName: 'AK1',
      password: '123',
    },
    {
      name: 'Audra Kenney',
      userName: 'AK2',
      password: '123',
    },
    {
      name: 'Talia Fayaz',
      userName: 'Shirline',
      password: '123',
    },
    {
      name: 'Wei Ji',
      userName: 'Weiwei',
      password: '123',
    },
    {
      name: 'Madeline Emde',
      userName: 'MaddieEm',
      password: '123',
    },
    {
      name: 'Guest',
      userName: 'guest',
      password: '123',
    },
  ];

  await Promise.all(
    paintings.map(painting => {
      return Paintings.create(painting);
    }),
    museums.map(museum => {
      return Museums.create(museum);
    }),
    students.map(student => {
      return Students.create(student);
    }),
    teachers.map(teacher => {
      return Teachers.create(teacher);
    })
  );

  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});
