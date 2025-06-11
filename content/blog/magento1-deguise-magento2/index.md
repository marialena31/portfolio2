---
title: |
  Quand tu arrives sur un projet Magento 2 et que tu découvres que c'est un Magento 1 en tenue de camouflage…
date: '2024-06-10'
description: "Retour terrain en deux volets sur les vraies coulisses d’un projet de migration Magento 1 ➜ Magento 2. Ou comment l’hybridation devient la norme."
author: 'Maria-Lena Pietri'
tags: ['Magento', 'E-commerce', 'Migration']
slug: 'magento1-deguise-magento2'
cover: './magento1-deguise-magento2.webp'
coverAlt: "Une façade Magento 2 qui masque un socle hérité de Magento 1"
---

Si tu crois que c’est exceptionnel, détrompe-toi. J’ai pas les stats, mais je dirais que la majorité des sites passés par Magento 1 sont au minimum passés par cette étape, et beaucoup y sont encore aujourd’hui.

Avant de crier au « les développeurs sont nuls, ils font n’importe quoi », il faut se poser une question simple :

Comment en est-on arrivé là ? Et pourquoi aussi fréquemment ?

À tel point que, quand tu arrives sur un projet M2, la première question à poser, c’est :

Depuis quand l’entreprise utilise Magento ?

Si ça remonte à « avant M2 », paf ! 9 fois sur 10, t’es en plein dedans.

Reprenons l’histoire.
On est en 2013. Une petite (ou grosse) entreprise a besoin d’un site e-commerce. Elle choisit Magento, solution open-source réputée pour sa stabilité, sa richesse fonctionnelle, sa communauté. Elle choisit au passage une agence spécialisée Magento 1, peut-être même certifiée. Le site sort en 2014, correspond à ses besoins, les clients sont contents. Bienvenue au pays des bisounours.

Fin 2015, patatras.

Magento 2 sort.

Et là, stupeur : il ne s’agit pas d’un upgrade, ni d’un update… mais d’une révolution !

Quand l’entreprise demande à son agence web préféré s’il faut passer à Magento 2, une goutte de sueur sur le front, l’agence lui répond :

Non, impossible !

Il faut tout recoder. Ca va vous coûter une fortune ! (Et de toute façon on n'est pas prêt.)

Parce que ce que l’agence ne dit pas, et qu'il faut entendre en filigrane, c’est qu’elle va devoir former ses équipes.

Parce que oui : Magento 2, c’est une rupture. Et à ce moment-là, les formations sont rares, chères, et surtout… réservées à ceux qui bossent chez Magento, éventuellement aux agences partenaires officielles. La documentation ? Pratiquement inexistante. Il faut y aller à l’aveugle, en mode R&D, les mains dans le cambouis.

Manque de temps, manque de compétences, manque d’envie parfois aussi. Le gap technique est réel. Et les agences web, comme toutes les boîtes, résistent au changement ; surtout quand il faut mener une révolution… avec des bouts de ficelle.

Et puis il y a l’ironie ultime : quand on lève le capot de Magento 2, on retrouve… du Magento 1.

Et non, ce n’est pas seulement le petit prestataire en galère. Même les équipes Magento, bien plus réduites qu’on l’imagine, ont eu du mal à tout réécrire dans les temps.

Sortir un Magento 2, en un temps record, alors qu’il fallait tout reconstruire.
Magento 1, c’est 500 000 lignes de code réparties dans plus de 10 000 fichiers. Magento 2, à sa sortie, c’est environ le double.

Avec une architecture entièrement revue :

architecture modulaire,  
injection de dépendances,  
contrats de service,  
fichiers XML en pagaille,  
disparition de Mage::getModel et compagnie.

Tout devait être réécrit. Découpé. Injecté. Documenté. Résultat : à la sortie… rien n’est sec.

Les nouvelles fonctionnalités ? codées « à la sauce M2 ». Mais les anciennes ? du code Magento 1 enrobé. Pas de contrats de service. Pas de découplage. Du M2 pas vraiment modulaire. Bref : un Magento 2 qui colle encore.

Revenons à notre entreprise. Elle demande régulièrement des nouvelles à son agence. Mais l’agence la persuade (à raison) d’attendre : trop tôt, trop cher, trop risqué, pas sec. Et puis, côté client aussi, ça coince, une révolution là-aussi à mener :

back office totalement différent,  
logique métier à réapprendre,  
ERP, CRM et modules à adapter.

Arrive 2019. Le site de notre petite entreprise a 5 ans. L’agence annonce que ses équipes sont enfin formées. Que la doc est là. Que le core est (presque) stabilisé. Et surtout… Magento 1 ne sera plus maintenu à partir de juin 2020.

Alors oui, une communauté s’organise. Des forks apparaissent. Des patchs circulent. Mais ça sent la fin. Le compte à rebours est lancé.

Notre entreprise a grandi. Elle est à l’étroit sur son M1 bricolé. Elle a repoussé les évolutions en attendant la refonte. Ça y est, janvier 2020, le budget est voté. Notre petite entreprise a le feu vert. Elle a moins de 6 mois avant la fin du support M1.

Cahier des charges ? Facile !

Le même site que le M1 !  
Les données ? Il "suffit" de migrer celles du M1 ! (Certes, les outils de migration commencent à être secs aussi…)

Mais c’est oublier les 20 modules tiers ajoutés ET customisés pour les besoins spécifiques de notre petite entreprise. Les connecteurs à son ERP. Et aussi à son CRM. Et… bref, un projet Magento, quoi !

Donc, cahier des charges : 1 ligne, et bonne chance.

---

Et donc, voilà.

Notre petite entreprise a fait son cahier des charges. Une ligne :

“Le même site que le Magento 1, mais en Magento 2.”  
L'agence rassemble une équipe, en urgence. Elle fait le point sur les personnes disponibles (et un tant soit peu volontaire pour la mission suici.., pardon, en or) :

- un développeur Magento 1, formé à Magento 2 (pardon, qui a lu la doc Magento 2 le week-end dernier),  
- un développeur Drupal (c'est bon, Magento c'est aussi du PHP, ça passe),  
- le nouvel alternant qui commence le mois prochain, il a marqué qu'il a fait un stage dans une entreprise l'année dernière et qu'il a refait un site Wordpress, il devrait vite être à niveau. De toute façon, on lui passera les tickets les plus faciles.  
- un lead dev qu'on a réussi à dé-staffer 1/2 journée par semaine d'un autre projet ! Qui a déjà fait une migration M2 vers M1 l'année dernière. C'est l'expert de la situation !  
- un dev front M1, qui a pas encore lu la doc est aussi extrait d'un autre projet pour l'occasion, enfin à mi-temps, il faudra faire avec  

Surtout, on dit pas que les 2 précédentes migrations ont pas été un franc succès, que les clients sont partis voir si une autre agence serait plus verte ailleurs...

De toute façon, la petite agence n'a pas le choix, elle a encore 5 clients qui sont sous M1. Et il va bien falloir les migrer un jour ou l'autre. A moins qu'il parte se faire migrer ailleurs, ce qui ne lui déplairait qu'à moitié.

Bon, on va le faire en mode Agile comme d'habitude !  
(sans backlog)

Alors l'équipe se remonte les manches. Le lead tire sur la corde pour libérer 1 journée et tenter de s'atteler à la migration de données. Le développeur Magento 1 fraîchement formé, enfin doc-éifié à M2, essaie de retrouver ses petits dans le projet M1 pour faire un semblant de spec technique. Le développeur Drupal bosse 3h tous les soirs sur la doc M2 pour comprendre au moins vaguement le fonctionnement.

L'alternant, à peine arrivé, jeté à l'eau avec PC, doc, et 3L de café en est toujours à la première ligne du premier ticket au bout 3 jours. Ah oui, personne a pensé à lui expliquer comment installer le projet sur son PC, et il n'a pas osé demander...

12 mois plus tard (au lieu des 6 espérés), 1ère livraison en préprod ! Ah oui, j'ai oublié de vous dire, ils sont en mode Agile ; mais sans environnement de test. Une vague histoire de budget pas validé, puis de droits d'accès pas fournis, puis un gars parti en maladie... Et enfin, personne pour le paramétrer, l'environnement. Oops ! Il manquait un devOps dans l'équipe ! Et l'infogérant habituel ? Jamais installé de M2 !

Enfin, rien de bien grave, on va pouvoir enfin livrer le site en preprod pour que le client recette ! Pour la première fois. Au bout de 12 mois de projet.

(je vous entend là les médisants ! Sisi on est en Agile, on n'avait pas de preprod pour livrer c'est tout !)

Le client recette. Recette. Recette.

Pas de son. Pas d'image. La tension monte. Le chef de projet nommé pour l'occasion (la recette), tente un mail au client.

"Ca se passe bien la recette ?"  
Oui et non. On les crée où les tickets de bugs ? On peut vous faire un fichier Excel plutôt ?

Le Chef de Projet pose la question fatidique... "Mais combien de tickets vous voulez créer ?"

248.

...

248 tickets ils ont créés ! Ils ont même recruté un stagiaire d'un autre service pour aider à la recette ! Et puis le service comptabilité, et la paie...

Le prestataire va devoir lire, trier, décortiquer... chaque ticket. Branle-bas de combat ! Déjà 6 mois de retard. Il dé staffe en urgence une partie de l'équipe qui a fait les 2 migrations précédentes de ses projets actuels pour venir en renfort.

2 mois, et beaucoup de sueur, de café, de soirée nocturne et de congés refusés plus tard. Le site part en PROD !

Victoire !  
Comment vous croyez que cette équipe de choc qui a survécu tant bien que mal, entre soirée à la bougie à lire la doc, et pile de tickets sans fin, a pu réussir cet exploit ? Oui parce que c'en est un ! Le site est en PROD, certains n'arrivent pas jusque là.

Au prix de quelques sacrifices, et beaucoup de copié-collés...

Du projet Magento 1 vers le projet Magento 2.

Parce que le lead qui devait faire de l'archéologie a pas réussi à tout désarchéologisé, que le dev Drupal a pas eu le temps de tout comprendre à l'architecture Magento 2, pas eu le temps de se former à la Magento 1. Que l'alternant qui a fini par réussir à installer le Magento 2, qui a bien fait un site Wordpress, avec Elementor et n'a fait que du Java à l'école, a passé déjà 2 mois à se former à PHP. Que les devs venus en renfort post-recette, ils avaient fait comme ça sur les 3 autres projets (vous savez ceux où les clients sont partis après ?).

Que chacun a mis beaucoup d'énergie, d'huile de coude, de bonne volonté ; mais comme aucun miracle n'a eu lieu, que le site ne s'est pas migré tout seul par magie. Il a fallut trouver des solutions. Les mêmes que celles qu'avait trouvé les devs de Magento en 2015 pour sortir le Magento 2.

**L'hybridation**  
Et bonne chance pour la TMA !

Parce que parfois, un Magento 2... c’est un Magento 1 déguisé. Et une équipe qui a fait ce qu’elle a pu.
