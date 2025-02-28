'use strict';
const axios = require('axios');
const constants = require('./constants');

exports.constants = constants;
const contexts = exports.contexts = new Map();

async function getContexts() {
  const securityContexts = await Promise.all([
    axios.get(
      'https://contexts-test.s3.us-east-2.amazonaws.com/security-v1.jsonld'
    ).then(({data}) => data),
    axios.get(
      'https://contexts-test.s3.us-east-2.amazonaws.com/security-v2.jsonld'
    ).then(({data}) => data)]);
  return new Map()
    .set(constants.SECURITY_CONTEXT_V1_URL, securityContexts[0])
    .set(constants.SECURITY_CONTEXT_V2_URL, securityContexts[1]);
}

exports.getContexts = getContexts;

contexts.set(
  constants.SECURITY_CONTEXT_V1_URL,
  {
    '@context': {
      id: '@id',
      type: '@type',

      dc: 'http://purl.org/dc/terms/',
      sec: 'https://w3id.org/security#',
      xsd: 'http://www.w3.org/2001/XMLSchema#',

      EcdsaKoblitzSignature2016: 'sec:EcdsaKoblitzSignature2016',
      Ed25519Signature2018: 'sec:Ed25519Signature2018',
      EncryptedMessage: 'sec:EncryptedMessage',
      GraphSignature2012: 'sec:GraphSignature2012',
      LinkedDataSignature2015: 'sec:LinkedDataSignature2015',
      LinkedDataSignature2016: 'sec:LinkedDataSignature2016',
      CryptographicKey: 'sec:Key',

      authenticationTag: 'sec:authenticationTag',
      canonicalizationAlgorithm: 'sec:canonicalizationAlgorithm',
      cipherAlgorithm: 'sec:cipherAlgorithm',
      cipherData: 'sec:cipherData',
      cipherKey: 'sec:cipherKey',
      created: {'@id': 'dc:created', '@type': 'xsd:dateTime'},
      creator: {'@id': 'dc:creator', '@type': '@id'},
      digestAlgorithm: 'sec:digestAlgorithm',
      digestValue: 'sec:digestValue',
      domain: 'sec:domain',
      encryptionKey: 'sec:encryptionKey',
      expiration: {'@id': 'sec:expiration', '@type': 'xsd:dateTime'},
      expires: {'@id': 'sec:expiration', '@type': 'xsd:dateTime'},
      initializationVector: 'sec:initializationVector',
      iterationCount: 'sec:iterationCount',
      nonce: 'sec:nonce',
      normalizationAlgorithm: 'sec:normalizationAlgorithm',
      owner: {'@id': 'sec:owner', '@type': '@id'},
      password: 'sec:password',
      privateKey: {'@id': 'sec:privateKey', '@type': '@id'},
      privateKeyPem: 'sec:privateKeyPem',
      publicKey: {'@id': 'sec:publicKey', '@type': '@id'},
      publicKeyBase58: 'sec:publicKeyBase58',
      publicKeyPem: 'sec:publicKeyPem',
      publicKeyWif: 'sec:publicKeyWif',
      publicKeyService: {'@id': 'sec:publicKeyService', '@type': '@id'},
      revoked: {'@id': 'sec:revoked', '@type': 'xsd:dateTime'},
      salt: 'sec:salt',
      signature: 'sec:signature',
      signatureAlgorithm: 'sec:signingAlgorithm',
      signatureValue: 'sec:signatureValue'
    }
  }

);
contexts.set(
  constants.SECURITY_CONTEXT_V2_URL,
  {
    '@context': [{
      '@version': 1.1
    }, 'https://w3id.org/security/v1', {
      AesKeyWrappingKey2019: 'sec:AesKeyWrappingKey2019',
      DeleteKeyOperation: 'sec:DeleteKeyOperation',
      DeriveSecretOperation: 'sec:DeriveSecretOperation',
      EcdsaSecp256k1Signature2019: 'sec:EcdsaSecp256k1Signature2019',
      EcdsaSecp256r1Signature2019: 'sec:EcdsaSecp256r1Signature2019',
      EcdsaSecp256k1VerificationKey2019: 'sec:EcdsaSecp256k1VerificationKey2019',
      EcdsaSecp256r1VerificationKey2019: 'sec:EcdsaSecp256r1VerificationKey2019',
      Ed25519Signature2018: 'sec:Ed25519Signature2018',
      Ed25519VerificationKey2018: 'sec:Ed25519VerificationKey2018',
      EquihashProof2018: 'sec:EquihashProof2018',
      ExportKeyOperation: 'sec:ExportKeyOperation',
      GenerateKeyOperation: 'sec:GenerateKeyOperation',
      KmsOperation: 'sec:KmsOperation',
      RevokeKeyOperation: 'sec:RevokeKeyOperation',
      RsaSignature2018: 'sec:RsaSignature2018',
      RsaVerificationKey2018: 'sec:RsaVerificationKey2018',
      Sha256HmacKey2019: 'sec:Sha256HmacKey2019',
      SignOperation: 'sec:SignOperation',
      UnwrapKeyOperation: 'sec:UnwrapKeyOperation',
      VerifyOperation: 'sec:VerifyOperation',
      WrapKeyOperation: 'sec:WrapKeyOperation',
      X25519KeyAgreementKey2019: 'sec:X25519KeyAgreementKey2019',

      allowedAction: 'sec:allowedAction',
      assertionMethod: {'@id': 'sec:assertionMethod', '@type': '@id', '@container': '@set'},
      authentication: {'@id': 'sec:authenticationMethod', '@type': '@id', '@container': '@set'},
      capability: {'@id': 'sec:capability', '@type': '@id'},
      capabilityAction: 'sec:capabilityAction',
      capabilityChain: {'@id': 'sec:capabilityChain', '@type': '@id', '@container': '@list'},
      capabilityDelegation: {'@id': 'sec:capabilityDelegationMethod', '@type': '@id', '@container': '@set'},
      capabilityInvocation: {'@id': 'sec:capabilityInvocationMethod', '@type': '@id', '@container': '@set'},
      caveat: {'@id': 'sec:caveat', '@type': '@id', '@container': '@set'},
      challenge: 'sec:challenge',
      ciphertext: 'sec:ciphertext',
      controller: {'@id': 'sec:controller', '@type': '@id'},
      delegator: {'@id': 'sec:delegator', '@type': '@id'},
      equihashParameterK: {'@id': 'sec:equihashParameterK', '@type': 'xsd:integer'},
      equihashParameterN: {'@id': 'sec:equihashParameterN', '@type': 'xsd:integer'},
      invocationTarget: {'@id': 'sec:invocationTarget', '@type': '@id'},
      invoker: {'@id': 'sec:invoker', '@type': '@id'},
      jws: 'sec:jws',
      keyAgreement: {'@id': 'sec:keyAgreementMethod', '@type': '@id', '@container': '@set'},
      kmsModule: {'@id': 'sec:kmsModule'},
      parentCapability: {'@id': 'sec:parentCapability', '@type': '@id'},
      plaintext: 'sec:plaintext',
      proof: {'@id': 'sec:proof', '@type': '@id', '@container': '@graph'},
      proofPurpose: {'@id': 'sec:proofPurpose', '@type': '@vocab'},
      proofValue: 'sec:proofValue',
      referenceId: 'sec:referenceId',
      unwrappedKey: 'sec:unwrappedKey',
      verificationMethod: {'@id': 'sec:verificationMethod', '@type': '@id'},
      verifyData: 'sec:verifyData',
      wrappedKey: 'sec:wrappedKey'
    }]
  }
);
