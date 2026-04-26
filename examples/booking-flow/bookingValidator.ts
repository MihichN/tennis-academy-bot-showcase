export type TimeSlot = {
  courtId: string
  startsAt: Date
  endsAt: Date
}

export type BookingRequest = {
  courtId: string
  startsAt: Date
  endsAt: Date
}

export function canBookSlot(
  request: BookingRequest,
  existingBookings: TimeSlot[],
): { allowed: boolean; reason?: string } {
  if (request.endsAt <= request.startsAt) {
    return { allowed: false, reason: "invalid_time_range" }
  }

  const hasConflict = existingBookings.some((booking) => {
    if (booking.courtId !== request.courtId) {
      return false
    }

    return request.startsAt < booking.endsAt && request.endsAt > booking.startsAt
  })

  if (hasConflict) {
    return { allowed: false, reason: "slot_already_booked" }
  }

  return { allowed: true }
}
