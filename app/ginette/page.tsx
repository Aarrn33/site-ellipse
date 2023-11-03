import CardParagraph from '../../components/cards/cardParagraph';
import CardSubTitle from '../../components/cards/cardSubTitle';
import CardTitle from '../../components/cards/cardTitle';
import ImageCard from '../../components/cards/imageCard';
import TextCard from '../../components/cards/textCard';
import PageTitle from '../../components/pageTitle/pageTitle';
import StandaloneImage from '../../components/standaloneImage/standaloneImage';
import utils from '../../styles/utils.module.scss';

import Link from 'next/link';
import PhotoCraies from '../../public/images/misc/cd_craies.jpg';
import PhotoPelerinage from '../../public/images/misc/chartres.jpg';
import PhotoGinetteHoche from '../../public/images/misc/ginette_hoche.jpg';
import PhotoPetitPrincePostit from '../../public/images/misc/petit_prince_postit.jpg';
import PhotoPiaule from '../../public/images/misc/piaule.jpg';
import PhotoPotager from '../../public/images/misc/potager.jpg';
import PhotoRabinage from '../../public/images/misc/rabinage.jpg';
import PhotoVolley from '../../public/images/misc/volley.jpg';

export default function Ginette() {
  return (
    <>
      <PageTitle>Ginette</PageTitle>
      <ImageCard
        src={PhotoPiaule}
        alt='Une photo de piaule (très bien rangée)'
        caption="Une piaule d'internat"
      >
        <CardTitle>Une journée type à Ginette</CardTitle>
        <CardParagraph>
          <b>7h45 : </b> Vous émergez difficilement de votre lit et vous rendez
          compte que le cours de Maths commence dans 30 minutes. Pourtant, vous
          ne serez pas en retard. Parce que vous avez juste à descendre 2 étages
          pour prendre le petit-déjeuner et descendre en cours. Avec un peu de
          chance, votre co vous aura même apporté votre petit-déjeuner au lit
          (on peut toujours rêver).
        </CardParagraph>
        <CardParagraph>
          <b>8h15 :</b> Après avoir lu les dernières actualités internationales
          consciencieusement rapportées au tableau par le CD News (ça dépend de
          l&apos;implication de celui-ci), les blagues plus ou moins bien
          trouvées des CD Blagues, et avoir commencé à vous réveiller grâce à
          une grande tasse de café ou de thé, vous êtes prêts à suivre le cours
          de maths.
        </CardParagraph>
        <CardParagraph>
          <b>12h30 :</b> La matinée s&apos;est composée de deux heures à évoquer
          le cardinal des ensembles finis puis deux heures
          d&apos;électrocinétique en régime continu, entrecoupés d&apos;une
          pause pour un goûter de pommes et de pain - et de chocolat, carburants
          essentiels des BJiens. C&apos;est enfin l&apos;heure du repas !
          Ensuite, c&apos;est la pause jusqu&apos;à 14h, le moment destiné aux
          nombreuses compétitions interclasses de foot, volley, rugby, etc... -
          ou, bien sûr, l&apos;Ellipse brille particulièrement.
        </CardParagraph>
        <CardParagraph>
          <b>16h : </b>Après 1 heure à manipuler les transformées de Laplace et
          autres changements de base en cours de SI et un peu d&apos;info, vous
          courrez vers votre piaule. Ce soir, vous avez de la chance. Pas de
          khôlle. Pour vous, c&apos;était hier. Vous pouvez profiter d&apos;un
          moment de détente avec vos co, qui sont déjà de grands amis ! Vous
          vous remettez bientôt au travail (car oui, c&apos;est quand même
          nécessaire de travailler, après tout).
        </CardParagraph>
        <CardParagraph>
          <b>20h : </b>Dîner. Vous avez la chance de manger tous ensemble dans
          le magnifique ref ellipse, sans longue attente comme au self du lycée
          !
        </CardParagraph>
        <CardParagraph>
          <b>20h50 : </b>Reprise du travail
        </CardParagraph>
        <CardParagraph>
          <b>23h : </b>L&apos;heure du coucher. Particularité à Ginette :
          couvre-feu pour les sup à 23h. Pour le bien de tous, finalement,
          puisque suivre des cours le lendemain en ayant dormi moins de 7 heures
          relève de l&apos;exploit ! Les filles rentrent dans leur propre
          bâtiment, laissant leurs DM de maths sur leur bureau, dans leur
          chambre de jour (située dans l&apos;internat des garçons, pour la
          mixité dira-t-on).
        </CardParagraph>
      </ImageCard>
      <ImageCard
        src={PhotoVolley}
        alt="Une photo d'une partie de l'Ellipse qui joue au volley contre les Sigma"
        caption="L'Ellipse affronte les Sigma au volley (et gagne)"
      >
        <CardTitle>Le sport à Ginette</CardTitle>
        <CardParagraph>
          Le sport occupe une place spéciale à Ginette. Car en plus des deux
          heures par semaine de cours de sport, qui sont déjà uniques parmi les
          prépas françaises, vous avez la possibilité de participer à un très
          grand nombre d&apos;activités avec une inscription au Sport
          universitaire : rugby, volley, football, basket, course à pied,
          natation, escalade et plein d&apos;autres. Il y en a pour tous les
          goûts. C&apos;est en partie pour la pratique sportive que le jeudi
          après-midi est entièrement libéré ! Pour les plus mordus, les
          compétitions interclasses vous attendent à midi après le repas, pour
          démontrer la définitive supériorité des Ellipses sur les autres
          classes. Vous en voulez encore plus ? Vous êtes champion d&apos;un
          sport en particulier, ou vous voulez en découvrir un nouveau ? Alors
          en vous inscrivant, vous pouvez aussi affronter les équipes des
          Grandes Ecoles et vous éclater, en les éclatant.
        </CardParagraph>
      </ImageCard>
      <StandaloneImage
        src={PhotoGinetteHoche}
        alt='Photo du match de basket opposant Ginette et Hoche. On y voit tous les supporters attroupés autour du terrain.'
        caption='Le Ginette-Hoche, rencontre annuelle de basket entre les deux lycées versaillais'
      />
      <TextCard>
        <CardTitle>Les AC / AS</CardTitle>
        <CardParagraph>
          Vous préférez la culture au sport de bourrin qu&apos;est le rugby ?
          Vous voulez vous engager au service des autres ? Les Activités
          Sociales et les Activités Culturelles vous attendent. Ginette,
          c&apos;est aussi un endroit de rêve pour pratiquer de la musique,
          aller à des concerts ou écouter des conférenciers célèbres (selon les
          années, un prix Nobel de Physique ou un spécialiste du changement
          climatique...). Vous aurez aussi la possibilité de donner un peu de
          votre temps le jeudi après-midi pour aller rendre visite à des
          personnes âgées ou handicapées ou encore faire du soutien scolaire.
          Parce qu&apos;il ne faut pas oublier la devise de l&apos;école,{' '}
          <b>Servir</b>.
        </CardParagraph>
      </TextCard>
      <ImageCard
        src={PhotoPelerinage}
        alt='Photo de quelques Ellipses au pèlerinage de Chartres'
        caption="L'Ellipse en pèlerinage à Chartres"
      >
        <CardTitle>Les activités spirituelles</CardTitle>
        <CardParagraph>
          Si vous êtes croyant (ou non), Ginette sera un endroit merveilleux
          pour vous rendre compte à quel point ce n&apos;est pas dépassé, fermé,
          ringard... Vous aurez la possibilité de débattre en groupe sur des
          questions de foi et surtout d&apos;animer des messes et... la prière
          Ellipse. Un aumônier accompagne la classe toute l&apos;année, pour
          accompagner ceux qui le souhaitent dans leur foi, mais aussi, pour
          ceux que ces questions intéressent moins (ou pas du tout), juste pour
          partager un moment chaleureux et vous soutenir à grand renfort de
          chocolat quand le moral n&apos;est pas au top.
        </CardParagraph>
      </ImageCard>
      <ImageCard
        src={PhotoPetitPrincePostit}
        alt='Petit Prince immense reconstitué en post-its sur la façade du bâtiment Saint-Joseph'
        caption='Voilà un aperçu du fruit de la collaboration des Ellipses (ça va.. la tête est pas si terrible !)'
      >
        <CardTitle>L&apos;esprit co</CardTitle>
        <CardParagraph>
          Ginette, c&apos;est plus qu&apos;une prépa. C&apos;est
          l&apos;incarnation de l&apos;esprit co, une des applications de la
          pédagogie jésuite à Ginette, même si on l&apos;oublie souvent en
          pratique. Vous ne subissez pas votre éducation, vous en êtes acteurs.
          Ainsi, l&apos;exemple le plus marquant est le système de charge.
          Chaque élève a un CD (pour Chargé De). Grâce à ce système (entre
          autres) naît une véritable coopération de tous les élèves dans la
          classe, qui fait toute la particularité du cadre de vie à la BJ. Voici
          une présentation (loin d&apos;être exhaustive) de ces CD.
        </CardParagraph>
      </ImageCard>
      {/* Affichage des cartes de présentation des CD */}
      <div className={`${utils.row} ${utils['with-margin']}`}>
        <div className={utils['column-2']}>
          <ImageCard
            src={PhotoRabinage}
            alt='Rabinage dans lequel les Ellipses jouent à se déguiser en formule-1 et faire la course'
            caption='Un rabinage formule-1'
            noMargin
          >
            <CardSubTitle>Le Rab et la Rabinette</CardSubTitle>
            <CardParagraph>
              Tout deux membres du bural, ces deux élèves sont chargés du lien
              avec l&apos;aumônerie et de la bonne ambiance de la classe. Grâce
              à eux, tu passeras des bons moments de classe à faire toutes
              sortes d&apos;activités incongrues comme concevoir des bâtiments à
              base de marshmallows et de spaghettis.
            </CardParagraph>
          </ImageCard>
          <TextCard noMargin>
            <CardSubTitle>Les CD Matière</CardSubTitle>
            <CardParagraph>
              Liens indispensables entre les élèves et les professeurs, les CD
              matières sont les bras droits du CDT. Spécialistes d&apos;une
              seule matière, ils l&apos;assistent dans l&apos;organisation des
              khôlles, transmettent des documents des professeurs aux élèves,
              distribuent parfois les copies corrigées, ou préviennent
              qu&apos;un rabinage guitare a actuellement lieu en grande salle.
            </CardParagraph>
          </TextCard>
          <TextCard noMargin>
            <CardSubTitle>Le CD HB</CardSubTitle>
            <CardParagraph>
              « JOYEUX ANNIVERSAIRE ! » entonne en choeur le réfectoire à
              l&apos;arrivée des CD HB. Car ce sont eux qui sont chargés de
              faire respecter l&apos;immuable tradition des anniversaires. Armés
              de leurs cartes signées par l&apos;intégralité de la classe et de
              leur bougies, ils apportent le bonheur à ceux qui fêtent ce jour
              loin de leur famille. Rien de tel que la voix mélodieuse du CD HB
              pour te remonter le moral quand tu as passé ta journée
              d&apos;anniversaire à pougner !
            </CardParagraph>
          </TextCard>
          <TextCard noMargin>
            <CardSubTitle>Le CD Gal</CardSubTitle>
            <CardParagraph>
              Être CD Gal est sans aucun doute le CD le plus important de tous :
              sur tes épaules reposeront le bonheur et la sécurité des
              over-schaffables Ellipsettes. Ta tâche : tenir les portes, écrire
              des poèmes, décider (tout à fait volontairement) de te sacrifier à
              leur place dans certaines circonstances dégradantes... Bref, sois
              serviable, volontaire et gentil, preux chevalier de l&apos;Ellipse
              !
            </CardParagraph>
          </TextCard>
          <ImageCard
            noMargin
            src={PhotoPotager}
            alt='Photo du potager mis en place par les CD Écolo'
            caption='Le magnifique potager mis en place par les CD Écolo'
          >
            <CardSubTitle>Le CD Écolo</CardSubTitle>
            <CardParagraph>
              Depuis quelques années, l&apos;écologie prend de plus en plus de
              place à la BJ. Le rôle des CD écolos est d&apos;accompagner leurs
              camarades dans la transition écologique, de monter des projets et
              de les mettre en œuvre avec l&apos;aide des bjiens et de la
              strass. La commission écologique de Ginette a permis la création
              d&apos;un système de tri de plus en plus efficace,
              l&apos;organisation de Clean Walks, de conférences, et même plus
              récemment la création d&apos;un potager en permaculture.
            </CardParagraph>
          </ImageCard>
        </div>
        <div className={utils['column-2']}>
          <TextCard noMargin>
            <CardSubTitle>Le CDT</CardSubTitle>
            <CardParagraph>
              Éminent membre du bural, le rôle du CDT est indispensable.
              C&apos;est lui qui organise, chaque semaine, le programme des
              khôlles de la classe, au grand bonheur de tous ses camarades, qui
              ne manquent jamais de le remercier pour son travail pas toujours
              facile... Spécialiste des problèmes d&apos;optimisation complexes,
              c&apos;est à lui de prendre le relais lorsque sa machine se noie
              sous les contraintes horaires, les rattrapages et les déplacements
              de créneaux inattendus. Il est toujours là pour s&apos;assurer
              qu&apos;aucun malheureux élève n&apos;ait une khôlle en moins par
              rapport aux autres (quelle injustice !). Cela peut certes sembler
              une grande charge pour un élève, mais ce rôle illustre très bien
              la philosophie de la BJ, qui tend à responsabiliser le plus
              possible ses étudiants.
            </CardParagraph>
          </TextCard>
          <TextCard noMargin>
            <CardSubTitle>Le KS</CardSubTitle>
            <CardParagraph>
              Le KS (parfois orthographié K$), est le trésorier de la classe.
              Lorsqu&apos;il y a besoin d&apos;argent pour un barbecue,
              c&apos;est lui qui fait la tournée des piaules pour collecter les
              impôts. Ses camarades ont confiance en lui, et, en tant que
              personne intègre, il n&apos;abuse jamais de cette confiance pour
              piquer dans la caisse… pas vrai, hein ?
            </CardParagraph>
          </TextCard>
          <ImageCard
            src={PhotoCraies}
            alt="Craies formant un personnage qui fait de l'escrime"
            caption='Représentation fidèle de M. Rax faisant cours'
            noMargin
          >
            <CardSubTitle>Le CD Craies</CardSubTitle>
            <CardParagraph>
              Si vous apercevez, quelques secondes avant le début du cours,
              quelqu&apos;un se hâtant dans le couloir tenant des dizaines de
              craies, n&apos;ayez crainte : le CD craies est en mission. Il
              s&apos;agit de sa routine matinale (et parfois du midi lorsque les
              maths ont été intenses…), vitale pour le bon déroulement des
              cours. Après avoir jouté et livré bataille contre ses concurrents
              pour obtenir les meilleures couleurs au lieu
              d&apos;approvisionnement, après avoir esquivé les retardataires
              dans le couloir lors de sa course, et après s&apos;être introduit
              dans la classe juste avant le professeur, il dépose les saintes
              craies sur la table, parfois en motifs complexes et ésotériques si
              l&apos;inspiration est présente. À la fois négociateur, athlète et
              artiste, le CD craies est de ce fait le CD plus prestigieux qui
              soit.
            </CardParagraph>
          </ImageCard>
          <TextCard noMargin>
            <CardSubTitle>Le CD Hug</CardSubTitle>
            <CardParagraph>
              Un coup de mou après une khôlle difficile ou une journée un peu
              longue ? Hors de question de rester tout seul à broyer du noir, le
              CD Hug est là pour vous ! Allez toquer à sa porte, et il vous
              accueillera à bras ouverts pour vous proposer sa spécialité : les
              câlins. En plus de son art des câlins, le CD Hug sait soutenir,
              écouter, et être attentif au moral de ses camarades. Cependant,
              n&apos;attendez pas d&apos;avoir le moral bas pour aller voir le
              CD Hug, les câlins sont aussi une manière de célébrer les moments
              de joie et les victoires (telle que celle de l&apos;Ellipse à un
              match de volley contre les sigmas…).
            </CardParagraph>
          </TextCard>
          <TextCard noMargin>
            <CardSubTitle>Le CD Web</CardSubTitle>
            <CardParagraph>
              À quoi peut-il bien servir ?{' '}
              <Link href='https://www.youtube.com/watch?v=xvFZjo5PgG0'>
                Peut-être à ça.
              </Link>
            </CardParagraph>
          </TextCard>
          <TextCard noMargin>
            <CardSubTitle>Le CD RDT</CardSubTitle>
            <CardParagraph>
              Le dernier, mais pas le moindre, n&apos;oublions pas le CD Rien Du
              Tout ! Malgré un statut avéré d&apos;emploi fictif, ce titre est
              reconnu par l&apos;éminent préfet et l&apos;ensemble de
              l&apos;Ellipse.
            </CardParagraph>
          </TextCard>
        </div>
      </div>
    </>
  );
}
