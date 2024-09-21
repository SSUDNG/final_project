import axios from 'axios';
import { getAuthHeaders } from './login';
import { BASE_URL } from '@/lib/constants';

export const fetchSidebarData = async ({ queryKey }: { queryKey: [string, { propertyId: number }] }) => {
  const [_key, { propertyId }] = queryKey; // Corrected destructuring
  const response = await axios.get(`${BASE_URL}/api/admin/properties/${propertyId}/consultations/sidebar`, {
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
    withCredentials: true,
  });
  console.log('Fetched sidebar data:', response); // Debug log
  return response.data;
};

export const fetchPendingConsultations = async ({
  queryKey,
}: {
  queryKey: [
    string,
    { propertyId: number; search: string; consultant: string; preferredAt: Date | undefined; page: number },
  ];
}) => {
  const [_key, { propertyId, search, consultant, preferredAt, page }] = queryKey;
  const response = await axios.get(`${BASE_URL}/api/admin/properties/${propertyId}/consultations/pending`, {
    params: {
      search,
      consultant,
      preferred_at: preferredAt,
      page,
      size: 5,
    },
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
    withCredentials: true,
  });
  return response.data;
};

export const fetchCompletedConsultations = async ({
  queryKey,
}: {
  queryKey: [
    string,
    {
      propertyId: number;
      search: string;
      tier: string;
      consultant: string;
      preferredAt: Date | undefined;
      page: number;
    },
  ];
}) => {
  const [_key, { propertyId, search, tier, consultant, preferredAt, page }] = queryKey;
  const response = await axios.get(`${BASE_URL}/api/admin/properties/${propertyId}/consultations/completed`, {
    params: {
      search,
      tier,
      consultant,
      preferred_at: preferredAt,
      page,
      size: 5,
    },
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
    withCredentials: true,
  });
  return response.data;
};

export const fetchAddNewCustomer = async (propertyId: number, customerData: any) => {
  const response = await axios.post(
    `${BASE_URL}/api/admin/properties/${propertyId}/consultations`,
    customerData,
    {
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeaders(),
      },
      withCredentials: true,
    },
  );
  return response.data;
};
