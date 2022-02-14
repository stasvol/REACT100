// eslint-disable-next-line import/namespace,import/named
import { ProfileType, ResponsePhotosType } from '../redux/prof_reducer';
import { addAxios, ApiResponseType, ResultCodeEnum } from './api';

//           PROFILE

export const profileApi = {
  getProfile(userId: number | null | undefined): Promise<ProfileType> {
    return (
      addAxios
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        .get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/Profile/${userId}`)
        .then(res => res.data)
    );
  },

  getStatus(
    userId: number | string,
  ): Promise<any | ApiResponseType<Record<string, never>, ResultCodeEnum>> {
    return addAxios.get<string>(`Profile/status/${userId}`).then(res => res.data);
  },

  updateStatus(status: string): Promise<ApiResponseType> {
    return addAxios.put<ApiResponseType>('Profile/status', { status }).then(res => res.data);
  },

  savePhoto(photoFile: string | Blob): Promise<ApiResponseType<ResponsePhotosType>> {
    const formData = new FormData();
    formData.append('image', photoFile);

    return addAxios
      .put<ApiResponseType<ResponsePhotosType>>('Profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(res => res.data);
  },

  editProfile(profile: ProfileType): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return addAxios.put('Profile', profile).then(res => res.data);
  },
};
