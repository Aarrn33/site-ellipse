import CardParagraph from '../../components/cards/cardParagraph';
import CardSubTitle from '../../components/cards/cardSubTitle';
import CardTitle from '../../components/cards/cardTitle';
import ImageCard from '../../components/cards/imageCard';
import TextCard from '../../components/cards/textCard';
import PageTitle from '../../components/pageTitle/pageTitle';
import PhotoBadminton from '../../public/images/misc/badminton.jpg';
import PhotoAnglais from '../../public/images/misc/elizabeth.jpg';
import PhotoMemeMaths from '../../public/images/misc/proofs.png';
import PhotoSchemaBloc from '../../public/images/misc/si.jpg';
import timeTableStyles from '../../styles/timetable.module.scss';
import utils from '../../styles/utils.module.scss';

export default function Mpsi() {
  return (
    <>
      <PageTitle>La MPSI</PageTitle>
      <TextCard>
        <CardTitle>Un petit topo sur la filière</CardTitle>
        <CardParagraph>
          Matrices, polynômes, suites et intégrales ? MPSI, c&apos;est tout
          simplement Mathématiques - Physique - Sciences de l&apos;ingénieur.
          Préparez vous bien avant de regarder notre emploi du temps, vous y
          trouverez 12 heures de maths… Si vous adorez les maths abstraites, les
          beaux problèmes de physique et que vous avez envie de découvrir les
          programmes récursifs et autres torseurs cinématiques, n&apos;hésitez
          plus, rejoignez nous en MPSI ! Dans toutes les matières, même non
          scientifiques, on aborde un programme soutenu mais passionnant.
        </CardParagraph>
      </TextCard>
      <TextCard>
        <CardTitle>Travailler en prépa</CardTitle>
        <CardParagraph>
          En Ellipse, on s&apos;entraide et on travaille à plusieurs pour faire
          progresser toute la classe. Avantage de l&apos;internat, on peut
          toujours se retourner pour poser une question à ses co, ou aller
          profiter d&apos;un grand tableau dans la salle de classe.
        </CardParagraph>
        <CardParagraph>
          Les colles (ou khôlles pour ceux qui aiment le grec), ce sont des
          heures d&apos;interrogation orale chaque semaine, distribuées
          généreusement par le CDT. Pour vous faire une idée : 1h de maths par
          semaine, 1h de physique une semaine sur deux, de l&apos;anglais, mais
          aussi du français et de la SI au plus grand plaisir de chacun.
        </CardParagraph>
        <CardParagraph>
          C&apos;est l&apos;occasion de travailler régulièrement son cours et de
          couvrir son jeans de craie… Parfois un moment de grande solitude face
          au tableau, l&apos;expérience montre qu&apos;on en ressort tout de
          même toujours vivant !
        </CardParagraph>
        <div className={timeTableStyles['timetable-wrapper']}>
          <table className={timeTableStyles.timetable}>
            <thead>
              <tr>
                <th>HEURE</th>
                <th>LUNDI</th>
                <th>MARDI</th>
                <th>MERCREDI</th>
                <th>JEUDI</th>
                <th>VENDREDI</th>
                <th>SAMEDI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8h15 - 9h15</td>
                <td rowSpan={2}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.math}`}
                  >
                    Maths
                  </div>
                </td>
                <td rowSpan={2}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.math}`}
                  >
                    Maths
                  </div>
                </td>
                <td rowSpan={2}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.math}`}
                  >
                    Maths
                  </div>
                </td>
                <td rowSpan={2}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.math}`}
                  >
                    Maths
                  </div>
                </td>
                <td rowSpan={2}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.math}`}
                  >
                    Maths
                  </div>
                </td>
                <td rowSpan={2}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.physique}`}
                  >
                    Physique
                  </div>
                </td>
              </tr>
              <tr>
                <td>9h15 - 10h15</td>
              </tr>
              <tr>
                <td>10h30 - 11h30</td>
                <td></td>
                <td rowSpan={2}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.physique}`}
                  >
                    Physique
                  </div>
                </td>
                <td rowSpan={2}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.eps}`}
                  >
                    EPS
                  </div>
                </td>
                <td rowSpan={1}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.rabinage}`}
                  >
                    Rabinage
                  </div>
                </td>
                <td rowSpan={2}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.lv1}`}
                  >
                    LV1
                  </div>
                </td>
                <td rowSpan={1}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.physique}`}
                  >
                    Physique
                  </div>
                </td>
              </tr>
              <tr>
                <td>11h30 - 12h30</td>
                <td rowSpan={1}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.si}`}
                  >
                    SI
                  </div>
                </td>
                <td></td>
                <td rowSpan={1}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.si}`}
                  >
                    TD SI
                  </div>
                </td>
              </tr>
              <tr>
                <td>12h30 - 14h00</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>14h00 - 15h00</td>
                <td rowSpan={1}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.info}`}
                  >
                    Info
                  </div>
                </td>
                <td rowSpan={1}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.physique}`}
                  >
                    Chimie
                  </div>
                </td>
                <td rowSpan={2}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.francais}`}
                  >
                    Français
                  </div>
                </td>
                <td></td>
                <td rowSpan={2}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.physique}`}
                  >
                    TP Physique
                  </div>
                </td>
                <td rowSpan={4}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.composition}`}
                  >
                    Composition
                  </div>
                </td>
              </tr>
              <tr>
                <td>15h00 - 16h00</td>
                <td rowSpan={1}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.info}`}
                  >
                    TP Info
                  </div>
                </td>
              </tr>
              <tr>
                <td>16h00 - 17h00</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td rowSpan={2}>
                  <div
                    className={`${timeTableStyles.subject} ${timeTableStyles.math}`}
                  >
                    TD Maths
                  </div>
                </td>
              </tr>
              <tr>
                <td>17h00 - 18h00</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </TextCard>
      {/* Présentation des différentes matières */}
      <ImageCard
        src={PhotoMemeMaths}
        alt='Petite bande dessinée mettant en scène un personnage faisant une démonstration fumeuse'
        caption='Un aperçu de ce à quoi ressemblent les démonstrations en arithmétique'
      >
        <CardTitle>Les Mathématiques</CardTitle>
        <CardParagraph>
          S&apos;il ne fallait citer qu&apos;une matière pour résumer la MPSI,
          ce serait les maths. Au moins 4 heures par jour, en comptant bien sûr
          le travail personnel, et pourtant pas les compositions du samedi, la
          colle hebdomadaire et les intenses discussions au réf sur
          l&apos;exercice 53 du DM. Saviez-vous que l&apos;ensemble des réels
          était en fait un corps ? Qu&apos;une brave bijection de
          l&apos;ensemble des fonctions de A vers B vers les |B|-listes de leurs
          images servait à quelque chose ? Ou encore que vous connaissez depuis
          la troisième l&apos;application linéaire canoniquement associée à une
          matrice 1x1 ?
        </CardParagraph>
        <CardParagraph>
          Les maths seront un nouveau monde en MPSI. Parfois magiques, parfois
          incompréhensibles, elles sont omniprésentes dans la vie d&apos;un
          Ellispe. Mais pas d&apos;inquiétude ! <b>M. Rax</b> vous montrera la
          voie…
        </CardParagraph>
      </ImageCard>
      <div className={`${utils.row} ${utils['with-margin']}`}>
        <div className={utils['column-2']}>
          <TextCard noMargin>
            <CardSubTitle>La Physique-Chimie</CardSubTitle>
            <CardParagraph>
              En physique, vous pourrez étudier des pingouins sur des igloos et
              des chevaux attachés devant le saloon en mécanique, et vous
              deviendrez vite experts dans l&apos;art de dessiner le fameux
              oscillateur harmonique ! Vous replongerez dans vos souvenirs de
              4ème et en ressortirez la loi d&apos;Ohm pour travailler
              l&apos;électrocinétique sous le regard bienveillant de{' '}
              <b>M. Castelnau</b>. L&apos;optique des rayons sera
              l&apos;occasion d&apos;admirer des arc-en-ciel, et vous aborderez
              même (un tout petit peu) la physique quantique, et les champs
              électrostatiques et... électromagnétiques... de quoi ne pas
              s&apos;ennuyer.
            </CardParagraph>
            <CardParagraph>
              Si vous avez bien lu le titre, chimie est entre parenthèses. Ne
              vous imaginez pas que vous ferez de la chimie en MPSI, on fait
              juste semblant, comme les nombreuses blagues de notre prof en
              témoignent. N&apos;empêche, vous étudierez quand même quelques
              chapitres savamment répartis entre de gros morceaux de physique.
            </CardParagraph>
          </TextCard>
          <TextCard noMargin>
            <CardSubTitle>L&apos;informatique</CardSubTitle>
            <CardParagraph>
              Entre récursivité, complexité et autres invariants de boucle, vous
              découvrirez en profondeur toutes les subtilités de Python et de la
              programmation en général, bien plus rigoureusement que sur votre
              vieille Casio collège.
            </CardParagraph>
            <CardParagraph>
              L&apos;informatique pour tous vous permettra de coder facilement
              des algorithmes toujours utiles pour, par exemple, générer des
              plans de classes aléatoires ou assurer en TIPE, mais aussi de
              comprendre le fonctionnement des ordinateurs.
            </CardParagraph>
            <CardParagraph>
              Vous pensez que ce sera trop facile pour vous ? Vous en avez déjà
              marre de ce langage impératif qu&apos;est Python ? Vous voulez
              trouver la sortie d&apos;un labyrinthe et découvrir les graphes?
              L&apos;option info est là pour vous ! Vous découvrirez ce
              magnifique langage qu&apos;est OCaml et sa facilité
              d&apos;écriture (vive les ;;), et vous pourrez résoudre le
              problème des tours de Hanoi le plus rapidement possible !
            </CardParagraph>
          </TextCard>
          <TextCard noMargin>
            <CardSubTitle>Le Français-Philosophie</CardSubTitle>
            <CardParagraph>
              Eh oui ! Même les préparationnaires scientifiques ont le droit à
              leurs deux heures hebdomadaires de Français-Philo. Nostalgiques du
              français de première, ou déçus de n&apos;avoir eu qu&apos;une
              année pour découvrir la philo, vous voilà rassurés !
            </CardParagraph>
            <CardParagraph>
              Notre très charmante et surtout passionnante professeure saura
              vous enseigner à la perfection les rouages de votre thème, autour
              duquel s&apos;organise toute l&apos;année en prépa scientifique.
              Vous pourrez bientôt le découvrir et lire les passionnants
              ouvrages de votre programme au bord de la plage cet été…
            </CardParagraph>
          </TextCard>
          <ImageCard
            noMargin
            src={PhotoBadminton}
            alt='Photo de classe en cours de sport dans le gymnase'
            caption='Le cours de badminton'
          >
            <CardSubTitle>Le sport</CardSubTitle>
            <CardParagraph>
              Particularité de Ginette, le sport est obligatoire !
            </CardParagraph>
            <CardParagraph>
              Ce sont deux heures intenses, mais surtout deux heures ou plus de
              détente à pratiquer non seulement des sports originaux comme le
              footy ou l&apos;ultimate mais aussi d&apos;autres plus classiques
              comme le foot, le basket ou le rugby (qui occupe une place
              spéciale à la BJ). C&apos;est l&apos;occasion de s&apos;amuser
              entre potes, de se défouler, et de rester en forme ! Les profs les
              plus cools du monde et l&apos;accès au beau complexe sportif de
              Ginette font la différence. Même ceux disant ne pas aimer le sport
              se sont laissés convaincre !
            </CardParagraph>
          </ImageCard>
        </div>
        <div className={utils['column-2']}>
          <ImageCard
            noMargin
            src={PhotoSchemaBloc}
            alt='Photo de M. Lemoussu faisant cours avec un grand schéma-bloc au tableau'
            caption='Pour les amateurs de schéma-blocs'
          >
            <CardSubTitle>Les SII</CardSubTitle>
            <CardParagraph>
              Au doux nom de Sciences Industrielles de l&apos;Ingénieur, SI pour
              les intimes, cette belle matière ne nécessite pas de l&apos;avoir
              pratiquée au lycée, heureusement pour la majorité de la classe. La
              SI vous permet de vous projeter dans le métier d&apos;ingénieur et
              de vous amuser du mouvement de bras de robots de toutes sortes.
            </CardParagraph>
            <CardParagraph>
              Vous serez séduits par les envolées lyriques de <b>M. Lemoussu</b>
              , présentant des expériences étonnantes à base de vélos et autres
              hoverboards. La légende raconte que ses meilleures anecdotes sont
              réservées aux fidèles qui ne quittent pas la SI pour
              l&apos;informatique.
            </CardParagraph>
            <CardParagraph>
              Laplace et ses arcanes parallèles tout autant que vos amis les
              torseurs (cinématiques, voire statiques !) vous guideront pas à
              pas jusqu&apos;aux TP du second semestre, pour les chanceux qui
              choisissent l&apos;option SI.
            </CardParagraph>
          </ImageCard>
          <ImageCard
            noMargin
            src={PhotoAnglais}
            alt="Des élèves en cours d'anglais en compagnie d'un modèle taille réelle en carton de la reine d'Angleterre"
            caption="L'Ellipse digne d'une visite royale en cours d'anglais !"
          >
            <CardSubTitle>L&apos;Anglais (ou autre langue...)</CardSubTitle>
            <CardParagraph>
              Car si la majorité de la classe a choisi anglais comme LV1, vous
              pouvez aussi choisir une autre langue pour profiter du bon niveau
              que vous pourriez avoir en arabe, allemand, espagnol…
            </CardParagraph>
            <CardParagraph>
              As for English classes… You will learn more about the
              english-speaking world, often leading to heated debates about the
              US elections or Brexit decisions, while discovering the art of
              translation. And — hopefully — you will soon be a fluent speaker !
            </CardParagraph>
            <CardParagraph>
              <i>Lucky you.</i>
            </CardParagraph>
          </ImageCard>
          <TextCard noMargin>
            <CardSubTitle>L&apos;Option</CardSubTitle>
            <CardParagraph>
              Courant décembre, vous devrez choisir une option : soit continuer
              la SI avec un supplément de 2h de TP par semaine, soit choisir
              l&apos;option Informatique. L&apos;Informatique Pour Tous du début
              d&apos;année continue… pour tous, comme son nom l&apos;indique,
              alors que la SI est totalement abandonnée par ceux qui ne
              choisissent pas l&apos;option.
            </CardParagraph>
            <CardParagraph>
              Le choix d&apos;une option n&apos;est pas anodin pour les classes
              de spé. Si la filière MP est accessible à tous, il faut avoir
              choisi l&apos;option SI pour aller en PSI*. À Ginette, la classe
              de MP et deux de MP* sont la suite directe de la MPSI, mais la
              classe de PSI* est aussi accessible à la fois pour les MPSI et les
              PCSI, pour ceux que la physique enchante et que la SI passionne !
            </CardParagraph>
          </TextCard>
          <TextCard noMargin>
            <CardSubTitle>Les matières facultatives</CardSubTitle>
            <CardParagraph>
              Vous pourrez également, si vous le souhaitez, participer à des
              cours de LV2 (1 à 2h par semaine). Ces cours sont la plupart du
              temps totalement facultatifs (venez si vous en avez le temps ou
              l&apos;envie), mais ils permettent de se détendre pendant la
              semaine, et d&apos;entretenir par exemple son niveau de LV2 en
              vue, éventuellement, de passer une LV2 en option aux concours.
            </CardParagraph>
            <CardParagraph>
              Dans le cas de l&apos;Allemand, sachez qu&apos;à Ginette, il est
              possible de s&apos;inscrire pour passer le DSD II (un diplôme
              d&apos;Allemand reconnu) en milieu d&apos;année de Sup.
            </CardParagraph>
          </TextCard>
        </div>
      </div>
    </>
  );
}
