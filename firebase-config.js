// Configuração do Firebase (arquivo separado).
// Usado por index.html e admin.html. Para trocar de projeto ou de administrador, altere só aqui.

export const firebaseConfig = {
  apiKey: "AIzaSyAY9T1msHMAtAAdRiPBNhch9IRUmnahjuk",
  authDomain: "dkservice-d5b03.firebaseapp.com",
  projectId: "dkservice-d5b03",
  storageBucket: "dkservice-d5b03.firebasestorage.app",
  messagingSenderId: "121430782968",
  appId: "1:121430782968:web:c6daedf81add1e7d4f1c0d"
};

// E-mails (Google) autorizados a entrar no painel.
// IMPORTANTE: a mesma lista deve estar nas regras do Firestore (veja as instruções).
export const ADMIN_EMAILS = [
  "excellentservices.excel@gmail.com"
];
