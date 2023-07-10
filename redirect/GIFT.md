# Cahier des charges et Documentation Technique

Ce fichier `GIFT.md` contient le cahier des charges et la documentation technique pour la page HTML de redirection vers Steam.

## Cahier des charges

- Objectif : Rediriger les utilisateurs vers la page d'activation de clé Steam correspondante en fonction du paramètre `key` dans l'URL.
- Afficher un message d'erreur si le paramètre `key` est invalide ou si la redirection échoue.
- L'accès à cette page de redirection s'effectue normalement uniquement depuis le sous-domaine [`gift.traaa.fr`](https://gift.traaa.fr/), bien que son accès n'y soit pas restreint.
- Lors de la redirection depuis le sous-domaine [`gift.traaa.fr`](https://gift.traaa.fr/), supprimer automatiquement le "/" qui est ajouté par l'option "forward path" de Google Domains afin de correspondre à l'URL attendue par la page de destination.

## Fonctionnalités

### `redirectToSteam()`

Cette fonction est appelée lorsque la page est chargée. Elle effectue les actions suivantes :

1. Vérifie la présence du paramètre `key` dans l'URL.
2. Vérifie si le paramètre `key` est valide (existe et a une longueur supérieure à 1 caractère).
3. Si le paramètre `key` est valide, génère une nouvelle URL de redirection avec le paramètre `key` modifié (premier caractère supprimé).
4. Effectue la redirection vers la nouvelle URL.
5. Affiche un message d'erreur si le paramètre `key` est invalide ou si la redirection échoue.

### `showError(errorMessage)`

Cette fonction affiche un message d'erreur passé en paramètre dans l'élément HTML ayant l'ID "error".

### Vérification de la redirection

- Lorsque la page est chargée, la fonction `redirectToSteam()` est appelée. Si le paramètre `key` est invalide, un message d'erreur est affiché immédiatement en utilisant la fonction `showError()`. Si le paramètre `key` est valide, la redirection s'effectue vers la page d'activation de clé Steam correspondante.
- Cependant, au bout de 5 secondes (fonction `setTimeout()`), le code vérifie si la redirection a réussi en comparant l'URL actuelle avec la nouvelle URL de redirection. Si la redirection a échoué, un message d'erreur est affiché.

Veuillez noter que le message d'erreur contient un lien de contact vers [`contact@anaelle.dev`](mailto:contact@anaelle.dev) pour signaler un problème éventuel.
