'use client'

import React, { FC } from 'react'
import { useRouter } from 'next/navigation';
import Button from '@/app/components/Button';
import Image from 'next/image';

const Dashboard: FC = () => {
  const router = useRouter();
  const getUserData = () => {
    router.push('/users')
  }
  return (
    <div>
      <Button handleButton={getUserData} />
      <Image width="50" height="50" src="https://img.icons8.com/ios/50/car-seat.png" alt="car-seat"/>
      {/* <Image src="/icons/vehicles/002-car.ico" alt="Car" width={100} height={100} /> */}
    </div>
  )
}

export default Dashboard