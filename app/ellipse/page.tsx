import CardParagraph from '../../components/cards/cardParagraph';
import CardTitle from '../../components/cards/cardTitle';
import ImageCard from '../../components/cards/imageCard';
import TextCard from '../../components/cards/textCard';
import PageTitle from '../../components/pageTitle/pageTitle';
import PhotoSelector from '../../components/photoSelector/photoSelector';
import StandaloneImage from '../../components/standaloneImage/standaloneImage';

import Classe2015 from '../../public/images/class_photos/2014-2015.jpg';
import Classe2016 from '../../public/images/class_photos/2015-2016.jpg';
import Classe2017 from '../../public/images/class_photos/2016-2017.jpg';
import Classe2018 from '../../public/images/class_photos/2017-2018.jpg';
import Classe2019 from '../../public/images/class_photos/2018-2019.jpg';
import Classe2020 from '../../public/images/class_photos/2019-2020.jpg';
import Classe2021 from '../../public/images/class_photos/2020-2021.jpg';
import Classe2022 from '../../public/images/class_photos/2021-2022.jpg';
import Classe2023 from '../../public/images/class_photos/2022-2023.jpg';

import PhotoEllipseGala from '../../public/images/misc/ellipse_gala.jpg';
import PhotoMenaceTaupe from '../../public/images/misc/menace_de_mort_taupe.jpg';
import PhotoRenardsOrigami from '../../public/images/misc/renards_origami.jpg';

// Ensemble des photos de classe depuis 2014 !
const classPhotos = {
  ['2022-2023']: Classe2023,
  ['2021-2022']: Classe2022,
  ['2020-2021']: Classe2021,
  ['2019-2020']: Classe2020,
  ['2018-2019']: Classe2019,
  ['2017-2018']: Classe2018,
  ['2016-2017']: Classe2017,
  ['2015-2016']: Classe2016,
  ['2014-2015']: Classe2015,
};

export default function Ellipse() {
  return (
    <>
      <PageTitle>L&apos;Ellipse</PageTitle>
      <ImageCard
        src={PhotoRenardsOrigami}
        alt='Une foule de renards en origami disposés sur le bureau du professeur'
        caption='On aime pas mal les renards en Ellipse..'
      >
        <CardTitle>Qui sommes-nous ?</CardTitle>
        <CardParagraph>
          Comme tous les MPSI, nous cultivons un goût des maths abstraites, de
          la physique théorique et autre programmation informatique. Mais les
          Ellipses se distinguent par leur esprit co et leur ambiance de classe
          plus que chaleureuse ! (et leur adoration un peu sectaire pour une
          certaine œuvre de Saint-Exupéry)
        </CardParagraph>
        <CardParagraph>
          Notre réputation de sportifs nous précède depuis que notre équipe de
          foot a tout gagné aux interclasses, et on peut toujours trouver un
          ellipse au gymnase. Chacun a son talent et la classe s&apos;enrichit
          de cette diversité. Musiciens, sportifs bien sûr, mais aussi
          magiciens, joueurs d&apos;échecs, poètes et artistes…
        </CardParagraph>
      </ImageCard>
      <StandaloneImage
        src={PhotoEllipseGala}
        alt='Photo de certains Ellipses au gala annuel de Ginette'
        caption='Photo des Ellipses au gala annuel de Ginette'
      />
      <TextCard>
        <CardTitle>Les Ellipsettes</CardTitle>
        <CardParagraph>
          Vous l&apos;aurez peut-être remarqué en jetant un coup d&apos;œil aux
          photos de classe, les Ellipsettes sont moins nombreuses. Cependant,
          comme tout Ellipse, elles sont appréciées de tous pour leur bonne
          compagnie et leurs rires contagieux. Futur sup, ne t&apos;avise pas de
          leur manquer de respect - de toute façon, leurs résolutions
          impeccables des DM de maths te replaceront vite à ta place. Quant à
          toi, future supette, n&apos;hésite pas à nous rejoindre en MPSI !
        </CardParagraph>
      </TextCard>
      <ImageCard
        src={PhotoMenaceTaupe}
        alt="Une photo d'Ellipse posant fièrement à côté de la mascotte des taupins (une petite taupe en peluche)"
        caption='La taupe Alix a eu chaud ce jour-là...'
      >
        <CardTitle>Les autres classes de la BJ</CardTitle>
        <CardParagraph>
          Véritable divinités de la BJ, les Ellipses sont admirés de toutes les
          autres classes.
        </CardParagraph>
        <CardParagraph>
          Les Taupins et les Sigmas sont nos petits frères en MPSI, avec qui
          nous nous allions surtout quand il s&apos;agit de donner tort aux
          Pistons et aux Atomes. Ces PCSI osent prétendre que nous passons nos
          journées devant nos cours de mathématiques et nos calculatrices, avec
          pour seul sport la montée et la descente des escaliers de
          l&apos;internat, préférant un bon DM de Maths à un match de rugby.
          Eux, pourtant, se contentent des approximations de chimistes (pour qui
          quelques exemples valent bien une preuve rigoureuse) et semblent
          considérer une blouse blanche comme le top de la mode. N&apos;oublions
          pas les Spices, qui malgré leur absence totale de logique mathématique
          (eux ne connaissent pas les isomorphismes d&apos;anneau... les
          pauvres), osent clamer haut et fort leur supériorité sur tout ce qui
          ressemble de près ou de loin à une classe scientifique. Ce serait
          oublier qu&apos;ils ne peuvent pas s&apos;empêcher de vénérer tout ce
          qui ressemble de près ou de loin à une carte de crédit... Et enfin,
          les Agros. Ces fans de lapins et des carottes qui vont avec sont quand
          même bien gentils…
        </CardParagraph>
        <CardParagraph>
          Cependant, la distinction ne s&apos;arrête pas là : véritable rayon de
          Soleil de la BJ, la prépa Ellipse occupe une place particulière au
          sein de Ginette, son réfectoire convivial est jalousé par tous (même
          si personne n&apos;ose l&apos;avouer...). Sa salle de classe
          attrayante, lumineuse, spacieuse, enfin parfaite (!) permet de
          travailler dans des conditions plus que favorables pour des
          résultats... fantastiques ! Bref, la prépa Ellipse, c&apos;est la voie
          royale pour intégrer (en attendant... il faut pougner !)
        </CardParagraph>
      </ImageCard>
      <PhotoSelector photos={classPhotos} />
    </>
  );
}
