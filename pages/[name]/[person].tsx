/**
 * An example on dynamic routing
 */

import { useRouter } from 'next/router'

const Person = () => {
  const router = useRouter();
  console.log(router.query);
  console.log(router.query.person);
  return <p>Hi its {router.query.person}</p>;
};

export default Person;
