import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    const [userResult, photoResult] = await Promise.all([userPromise, photoPromise]);

    return [
      { status: userResult.status, value: userResult.value },
      { status: photoResult.status, value: photoResult.value },
      // Add more entries for other promises if needed
    ];
  } catch (error) {
    // Handle any errors here
    return [{ status: 'rejected', value: error.message }];
  }
}
